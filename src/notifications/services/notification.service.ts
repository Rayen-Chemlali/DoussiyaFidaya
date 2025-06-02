import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserPreferencesService } from './user-preferences.service';
import { EntityUserRelationUtil } from '../utils/entity-user-relation.util';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class NotificationService implements OnModuleInit {
  private readonly logger = new Logger(NotificationService.name);
  private clients: Map<string, NodeJS.Timeout > = new Map();
  private rabbitClient: ClientProxy;
  private eventCache: Map<string, { timestamp: number; payload: any }> = new Map();
  private entityUsersCache: Map<string, string[]> = new Map();
  private my_id: number = 0;

  constructor(
    //private userPreferences: UserPreferencesService,
    private relationUtil: EntityUserRelationUtil,
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {
    this.rabbitClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'notifications_queue',
        queueOptions: { durable: true, messageTtl: 86400000 },
      },
    });
    this.my_id = Math.random() * 1000;
    this.logger.log(`NotificationService initialized, ID: ${this.my_id}`);
  }

  async onModuleInit() {
    try {
      await this.rabbitClient.connect();
      this.logger.log('RabbitMQ initialized');
    } catch (err) {
      this.logger.error(`Initialization failed: ${err.message}`);
    }
  }

  async registerClient(clientId: string) {
    try {
      console.log('this is my id here registerClient', this.my_id);
      // Clear existing timeout if re-registering
      const existing = this.clients.get(clientId);
      if (existing) {
        clearTimeout(existing);
      }
      // Set new timeout for 24h (86400s)
      const timeout  = setTimeout(() => this.clients.delete(clientId), 86400 * 1000);
      this.clients.set(clientId, timeout);
      this.logger.log(`Client ${clientId} registered`);
    } catch (err) {
      this.logger.error(`Error registering client ${clientId}: ${err.message}`);
      throw err;
    }
  }

  async unregisterClient(clientId: string) {
    try {
      console.log("i'm unregistering the client", clientId);
      const client = this.clients.get(clientId);
      if (client) {
        clearTimeout(client);
        this.clients.delete(clientId);
        this.logger.log(`Client ${clientId} unregistered`);
      }
    } catch (err) {
      this.logger.error(`Error unregistering client ${clientId}: ${err.message}`);
      throw err;
    }
  }

  async dispatchEvent(eventName: string, payload: any) {
    try {
      console.log('this is my id here', this.my_id);
      this.logger.log(`Dispatching event: ${eventName}, entity ID: ${payload.entity.id}`);
      console.log('this the payload i expect in cache', payload);
      const cacheKey = `${eventName}:${payload.entity.id}`;
      const now = Date.now();
      const cachedEvent = this.eventCache.get(cacheKey);
      if (cachedEvent && now - cachedEvent.timestamp < 5000) {
        this.logger.log(`Event ${cacheKey} skipped (cached)`);
        return;
      }
      this.eventCache.set(cacheKey, { timestamp: now, payload });
      setTimeout(() => this.eventCache.delete(cacheKey), 5000);

      const entity = payload.entity;
      let userIds: string[] = [];

      // Check in-memory cache for entity-user relations
      const cachedUsers = this.entityUsersCache.get(`entity:users:${entity.id}`);
      if (cachedUsers) {
        userIds = cachedUsers;
      } else {
        // Query database for related users
        userIds = await this.getRelatedUserIds(entity);
        this.entityUsersCache.set(`entity:users:${entity.id}`, userIds);
        setTimeout(() => this.entityUsersCache.delete(`entity:users:${entity.id}`), 3600000);
      }
      this.logger.log(`Related user IDs: ${userIds.join(', ')}`);

      const allowedUserIds = userIds; // Placeholder for userPreferences.filterUsersByPreferences
      this.logger.log(`Allowed user IDs: ${allowedUserIds.join(', ')}`);

      const onlineUserIds: string[] = [];
      const offlineUserIds: string[] = [];
      for (const userId of allowedUserIds) {
        const client = this.clients.get(userId);
        if (client) {
          console.log('client is online', client);
          onlineUserIds.push(userId);
        } else {
          console.log('client is offline', client);
          offlineUserIds.push(userId);
        }
      }
      const compactPayload = { eventName, entity: { id: entity.id, ...entity } };
      if (onlineUserIds.length > 0) {
        for (const userId of onlineUserIds) {
          this.eventEmitter.emit(`sse.notify:${userId}`, { eventName, payload: compactPayload });
          this.logger.log(`Emitted sse.notify:${userId} for user ${userId}`);
        }
        this.rabbitClient.emit('notification-online', { eventName, payload: compactPayload, userIds: onlineUserIds });
      }

      if (offlineUserIds.length > 0) {
        this.rabbitClient.emit('notification-offline', { eventName, payload:compactPayload, userIds: offlineUserIds });
        this.logger.log(`Emitted notification to RabbitMQ for ${offlineUserIds.length} users`);
      }
    } catch (err) {
      this.logger.error(`Error dispatching event ${eventName}: ${err.message}`);
      throw err;
    }
  }

  async deliverStoredNotifications(userId: string) {
    console.log('this is my id here deliverStoredNotifications', this.my_id);
    try {
      const notifications = await this.prisma.userNotification.findMany({ where: { userId } });
      console.log('these are my notifications', notifications);
      if (notifications.length > 0) {
        for (const notif of notifications) {
          const data = JSON.parse(notif.payload);
          console.log('this is my data', data);
          await this.notifyClient(userId, {eventName:notif.eventName, entity: data});
          await this.prisma.userNotification.delete({ where: { id: notif.id } });
        }
        this.logger.log(`Delivered ${notifications.length} stored notifications to ${userId}`);
      }
    } catch (err) {
      this.logger.error(`Error delivering notifications to ${userId}: ${err.message}`);
      throw err;
    }
  }

  // async isUserOnline(userId: string): Promise<boolean> {
  //   try {
  //     const isOnline = this.clients.has(userId);
  //     this.logger.log(`User ${userId} isOnline: ${isOnline}`);
  //     return isOnline;
  //   } catch (err) {
  //     this.logger.error(`Error checking online status for ${userId}: ${err.message}`);
  //     return false;
  //   }
  // }

  private async notifyClient(userId: string, data: { eventName: string; entity: any }) {
    console.log('this is my id here notifyClient', this.my_id);
    try {
      const {eventName,entity} = data;
      this.eventCache.set(eventName, {timestamp: Date.now(), payload: {entity:entity}});
      console.log('this is the payload im sending', {entity:data.entity})
      setTimeout(() => this.eventCache.delete(eventName), 5000);
      this.eventEmitter.emit(`sse.notify:${userId}`, { eventName, payload: data });
      console.log(`Emitted sse.notify:${userId} for user ${userId} from notifyClient`);
    } catch (err) {
      this.logger.error(`Error notifying client ${userId}: ${err.message}`);
    }
  }

  private async getRelatedUserIds(entity: any): Promise<string[]> {
    const patientId = entity.patients? entity.patients.users.id : null;
    const doctorId = entity.doctors? entity.doctors.users.id : null;
    const userId = entity.user_id ? entity.user_id : null;
    const myId = entity.hasOwnProperty("email") ? entity.id : null;
    console.log("the ids are", {myId, patientId, doctorId});
    return [myId,userId,patientId,doctorId].filter(id => id !== null) as string[];
  }

  // private matchPattern(pattern: string, topic: string): boolean {
  //   const patternParts = pattern.split('.');
  //   const topicParts = topic.split('.');
  //
  //   if (patternParts.length !== topicParts.length) return false;
  //
  //   return patternParts.every((part, i) => part === '*' || part === topicParts[i]);
  // }

  async onApplicationShutdown() {
    try {
      await this.rabbitClient.close();
      this.logger.log('RabbitMQ connection closed');
    } catch (err) {
      this.logger.error(`Error during shutdown: ${err.message}`);
    }
  }
}
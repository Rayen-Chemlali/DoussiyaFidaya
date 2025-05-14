import { Injectable, OnModuleInit, Inject, Logger } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { UserPreferencesService } from './user-preferences.service';
import { EntityUserRelationUtil } from '../utils/entity-user-relation.util';
import { PrismaService } from './prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import Redis from 'ioredis';

@Injectable()
export class NotificationService implements OnModuleInit {
  private readonly logger = new Logger(NotificationService.name);
  private clients: Map<string, { channels: string[] }> = new Map();
  private rabbitClient: ClientProxy;
  private redis: Redis;
  private pub: Redis;
  private sub: Redis;
  private my_id: number = 0;

  constructor(
    private userPreferences: UserPreferencesService,
    private relationUtil: EntityUserRelationUtil,
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject('REDIS_CLIENT') redisClient: Redis,
  ) {
    this.rabbitClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'notifications_queue',
        queueOptions: { durable: true, messageTtl: 86400000 },
      },
    });
    this.redis = redisClient;
    this.pub = new Redis({ host: process.env.REDIS_HOST || 'localhost', port: parseInt(process.env.REDIS_PORT || '6379') });
    this.sub = new Redis({ host: process.env.REDIS_HOST || 'localhost', port: parseInt(process.env.REDIS_PORT || '6379') });
    this.my_id = Math.random() * 1000;
    this.logger.log(`NotificationService initialized, ID: ${this.my_id}`);
  }

  async onModuleInit() {
    try {
      await this.rabbitClient.connect();
      await this.sub.subscribe('sse.notify');
      this.sub.on('message', (channel, message) => {
        if (channel === 'sse.notify') {
          const data = JSON.parse(message);
          this.clients.forEach((client, clientId) => {
            if (data.userIds.includes(clientId) && client.channels.some((ch) => this.matchPattern(ch, data.eventName))) {
              this.notifyClient(clientId, data);
            }
          });
        }
      });
      this.logger.log('RabbitMQ and Redis Pub/Sub initialized');
    } catch (err) {
      this.logger.error(`Initialization failed: ${err.message}`);
    }
  }

  async registerClient(clientId: string, channels: string[]) {
    try {
      this.clients.set(clientId, { channels });
      await this.cacheManager.set(`user:channels:${clientId}`, JSON.stringify(channels), 86400);
      this.logger.log(`Client ${clientId} registered for channels: ${channels.join(', ')}`);
      await this.deliverStoredNotifications(clientId);
    } catch (err) {
      this.logger.error(`Error registering client ${clientId}: ${err.message}`);
      throw err;
    }
  }

  async unregisterClient(clientId: string) {
    try {
      const client = this.clients.get(clientId);
      if (client) {
        this.clients.delete(clientId);
        await this.cacheManager.del(`user:channels:${clientId}`);
        this.logger.log(`Client ${clientId} unregistered`);
      }
    } catch (err) {
      this.logger.error(`Error unregistering client ${clientId}: ${err.message}`);
      throw err;
    }
  }

  async dispatchEvent(eventName: string, payload: any) {
    try {
      this.logger.log(`Dispatching event: ${eventName}, entity ID: ${payload.entity.id}`);
      const cacheKey = `${eventName}:${payload.entity.id}`;
      const now = Date.now();
      const cachedEvent = await this.redis.get(`event:cache:${cacheKey}`);
      if (cachedEvent) {
        const event = JSON.parse(cachedEvent);
        if (now - event.timestamp < 5000) {
          this.logger.log(`Event ${cacheKey} skipped (cached)`);
          return;
        }
      }
      await this.redis.set(`event:cache:${cacheKey}`, JSON.stringify({ timestamp: now, payload }), 'EX', 5);

      const entity = payload.entity;
      let userIds: string[] = [];

      // Check Redis cache for entity-user relations
      const cachedUsers = await this.redis.get(`entity:users:${entity.id}`);
      if (cachedUsers) {
        userIds = JSON.parse(cachedUsers);
      } else {
        // Query database for related users
        userIds = await this.getRelatedUserIds(entity);
        await this.redis.set(`entity:users:${entity.id}`, JSON.stringify(userIds), 'EX', 3600);
      }
      this.logger.log(`Related user IDs: ${userIds.join(', ')}`);

      const allowedUserIds = userIds; // Placeholder for userPreferences.filterUsersByPreferences
      this.logger.log(`Allowed user IDs: ${allowedUserIds.join(', ')}`);

      const onlineUserIds: string[] = [];
      const offlineUserIds: string[] = [];
      for (const userId of allowedUserIds) {
        const channelsJson = await this.cacheManager.get(`user:channels:${userId}`);
        if (channelsJson) {
          let channels;
          if (typeof channelsJson === 'string') {
            channels = JSON.parse(channelsJson);
          }
          if (channels.some((ch: string) => this.matchPattern(ch, eventName))) {
            onlineUserIds.push(userId);
          }
        } else {
          offlineUserIds.push(userId);
        }
      }

      if (onlineUserIds.length > 0) {
        const compactPayload = { eventName, entity: { id: entity.id, ...entity } };
        await this.pub.publish('sse.notify', JSON.stringify({ eventName, payload: compactPayload, userIds: onlineUserIds }));
        this.logger.log(`Published sse.notify for ${onlineUserIds.length} users`);
      }

      if (offlineUserIds.length > 0) {
        this.rabbitClient.emit('notification', { eventName, payload, userIds: offlineUserIds });
        this.logger.log(`Emitted notification to RabbitMQ for ${offlineUserIds.length} users`);
      }
    } catch (err) {
      this.logger.error(`Error dispatching event ${eventName}: ${err.message}`);
      throw err;
    }
  }

  async deliverStoredNotifications(userId: string) {
    try {
      const notifications = await this.prisma.userNotification.findMany({ where: { userId } });
      if (notifications.length > 0) {
        for (const notif of notifications) {
          await this.notifyClient(userId, JSON.parse(notif.payload));
          await this.prisma.userNotification.delete({ where: { id: notif.id } });
        }
        this.logger.log(`Delivered ${notifications.length} stored notifications to ${userId}`);
      }
    } catch (err) {
      this.logger.error(`Error delivering notifications to ${userId}: ${err.message}`);
      throw err;
    }
  }

  async isUserOnline(userId: string): Promise<boolean> {
    try {
      const channelsJson = await this.cacheManager.get(`user:channels:${userId}`);
      const isOnline = !!channelsJson;
      this.logger.log(`User ${userId} isOnline: ${isOnline}`);
      return isOnline;
    } catch (err) {
      this.logger.error(`Error checking online status for ${userId}: ${err.message}`);
      return false;
    }
  }

  private async notifyClient(userId: string, data: { eventName: string; payload: any }) {
    try {
      await this.redis.set(`event:cache:${data.eventName}:${Date.now()}`, JSON.stringify(data), 'EX', 5);
      await this.pub.publish(`sse.client.notify:${userId}`, JSON.stringify({ userId, data }));
    } catch (err) {
      this.logger.error(`Error notifying client ${userId}: ${err.message}`);
    }
  }

  private async getRelatedUserIds(entity: any): Promise<string[]> {
    this.logger.log(`Getting related user IDs for entity ${entity.id}`);
    // i need to fix this ( to be fixed)
    return [entity.id,entity.patient_id,entity.doctor_id].filter((id) => id !== null && id !== undefined);
    // try {
    //   const userIds: string[] = [];
    //   const jobOffer = await this.prisma.jobOffer.findUnique({
    //     where: { id: entity.id },
    //     select: {
    //       userId: true,
    //       applications: { select: { userId: true } },
    //     },
    //   });
    //   if (jobOffer) {
    //     userIds.push(jobOffer.userId);
    //     userIds.push(...jobOffer.applications.map((app) => app.userId));
    //   }
    //   const relatedUserIds = await Promise.all(
    //     userIds.map(async (userId) => {
    //       return (await this.relationUtil.isUserRelatedToEntity(userId, entity)) ? userId : null;
    //     }),
    //   );
    //   return [...new Set(relatedUserIds.filter((id): id is string => id !== null))];
    // } catch (err) {
    //   this.logger.error(`Error getting related user IDs for entity ${entity.id}: ${err.message}`);
    //   return [];
    // }
  }

  private matchPattern(pattern: string, topic: string): boolean {
    const patternParts = pattern.split('.');
    const topicParts = topic.split('.');

    if (patternParts.length !== topicParts.length) return false;

    return patternParts.every((part, i) => part === '*' || part === topicParts[i]);
  }

  async onApplicationShutdown() {
    try {
      await this.redis.quit();
      await this.pub.quit();
      await this.sub.quit();
      await this.rabbitClient.close();
      this.logger.log('Redis and RabbitMQ connections closed');
    } catch (err) {
      this.logger.error(`Error during shutdown: ${err.message}`);
    }
  }
}
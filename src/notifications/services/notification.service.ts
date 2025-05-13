import { Injectable, OnModuleInit } from '@nestjs/common';
import { Response } from 'express';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { UserPreferencesService } from './user-preferences.service';
import { EntityUserRelationUtil } from '../utils/entity-user-relation.util';
import { PrismaService } from './prisma.service';

@Injectable()
export class NotificationService implements OnModuleInit {
  private clients: Map<string, { channels: string[]; res: Response }> = new Map();
  private channelIndex: Map<string, Set<string>> = new Map();
  private eventCache: Map<string, { timestamp: number; payload: any }> = new Map();
  private rabbitClient: ClientProxy;
  private my_id: number = 0;

  constructor(
    private userPreferences: UserPreferencesService,
    private relationUtil: EntityUserRelationUtil,
    private prisma: PrismaService,
  ) {
    this.rabbitClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'notifications_queue',
        queueOptions: { durable: true, messageTtl: 86400000 }, // 24-hour TTL
      },
    });
    console.log('notification service in itself',this);
    this.my_id = Math.random()*1000;
    console.log(this.my_id);
  }

  async onModuleInit() {
    await this.rabbitClient.connect();
    setInterval(() => {
      const now = Date.now();
      for (const [key, { timestamp }] of this.eventCache) {
        if (now - timestamp > 5000) {
          this.eventCache.delete(key);
        }
      }
      // Future: Clean expired action history
      // this.prisma.actionHistory.deleteMany({ where: { expiresAt: { lte: new Date() } } });
    }, 60000);
  }

  async registerClient(clientId: string, channels: string[], res: Response) {
    this.clients.set(clientId, { channels, res });
    channels.forEach((channel) => {
      if (!this.channelIndex.has(channel)) {
        this.channelIndex.set(channel, new Set());
      }
      this.channelIndex.get(channel)!.add(clientId);
    });
    console.log(`Client ${clientId} registered for channels: ${channels.join(', ')}`);
    await this.deliverStoredNotifications(clientId);
  }

  unregisterClient(clientId: string) {
    const client = this.clients.get(clientId);
    if (client) {
      client.channels.forEach((channel) => {
        const clientIds = this.channelIndex.get(channel);
        if (clientIds) {
          clientIds.delete(clientId);
          if (clientIds.size === 0) {
            this.channelIndex.delete(channel);
          }
        }
      });
      this.clients.delete(clientId);
      client.res.end();
    }
  }

  async dispatchEvent(eventName: string, payload: any) {
    console.log('dispatch in id',this.my_id);
    console.log(`Dispatching event: ${eventName}`, payload);
    const cacheKey = `${eventName}:${payload.entity.id}`;
    const now = Date.now();
    if (this.eventCache.has(cacheKey) && now - this.eventCache.get(cacheKey)!.timestamp < 5000) {
      return;
    }
    this.eventCache.set(cacheKey, { timestamp: now, payload });

    const entity = payload.entity;
    const matchedChannels = this.getMatchedChannels(eventName);
    console.log(`Matched channels for event ${eventName}:`, matchedChannels);

    const userIds: string[] = [];
    for (const clientId of this.clients.keys()) {
      if (await this.relationUtil.isUserRelatedToEntity(clientId, entity)) {
        userIds.push(clientId);
      }
    }
    console.log(`User IDs related to entity ${entity.id}:`, userIds);

    //const allowedUserIds = await this.userPreferences.filterUsersByPreferences(userIds, eventName);
    const allowedUserIds = userIds;
    console.log(`Allowed user IDs after filtering:`, allowedUserIds);
    for (const channel of matchedChannels) {
      const clientIds = this.channelIndex.get(channel) || new Set();
      console.log(`Client IDs for channel ${channel}:`, clientIds);
      for (const clientId of clientIds) {
        if (allowedUserIds.includes(clientId)) {
          console.log(`Sending event to client ${clientId} on channel ${channel}`);
          console.log('clients here are :', this.clients);
          const client = this.clients.get(clientId);
          console.log('here is the client :',client);
          if (client) {
            const compactPayload = { eventName, entity: { id: entity.id, ...entity } };
            client.res.write(`data: ${JSON.stringify(compactPayload)}\n\n`);
            console.log('here are the clients:', this.clients);
          }
        }
      }
    }

    if (allowedUserIds.length > 0) {
      this.rabbitClient.emit('notification', { eventName, payload, userIds: allowedUserIds });
    }
  }

  async deliverStoredNotifications(userId: string) {
    const notifications = await this.prisma.userNotification.findMany({ where: { userId } });
    for (const notif of notifications) {
      const client = this.clients.get(userId);
      if (client) {
        client.res.write(`data: ${notif.payload}\n\n`);
        await this.prisma.userNotification.delete({ where: { id: notif.id } });
      }
    }
  }

  async isUserOnline(userId: string): Promise<boolean> {
    console.log('is user online', userId);
    console.log('clients', this.clients);
    console.log('id in useronline',this.my_id)
    return this.clients.has(userId);
  }

  async dispatchEventToUser(userId: string, eventName: string, payload: any) {
    const client = this.clients.get(userId);
    if (client) {
      const compactPayload = { eventName, entity: { id: payload.entity.id, ...payload.entity } };
      client.res.write(`data: ${JSON.stringify(compactPayload)}\n\n`);
    }
  }

  // private getMatchedChannels(eventName: string): string[] {
  //   const channels = Array.from(this.channelIndex.keys());
  //   console.log('these are all the channels', channels);
  //   return micromatch(channels, [eventName, eventName.replace(/\.\d+\./, '.*.')]);
  // }
  private matchPattern(pattern: string, topic: string): boolean {
    const patternParts = pattern.split('.');
    const topicParts = topic.split('.');

    if (patternParts.length !== topicParts.length) return false;

    return patternParts.every((part, i) => part === '*' || part === topicParts[i]);
  }

  private getMatchedChannels(eventName: string): string[] {
    const channels = Array.from(this.channelIndex.keys());
    return channels.filter(pattern => this.matchPattern(pattern, eventName));
  }

}
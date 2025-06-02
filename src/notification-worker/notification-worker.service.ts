import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PrismaService } from '../notifications/services/prisma.service';

@Controller()
export class NotificationWorkerService {
  constructor(private readonly prisma: PrismaService) {}

  @EventPattern('notification-offline')
  async handleNotification(msg: { eventName: string; payload: any; userIds: string[] }) {
    await this.PersistNotification(false, msg);
  }
  @EventPattern('notification-online')
  async handleOnlineNotification(msg: { eventName: string; payload: any; userIds: string[] }) {
    await this.PersistNotification(true, msg);
  }
  async PersistNotification(status:boolean,msg: { eventName: string; payload: any; userIds: string[] }) {
    console.log('Received [Event] notification', msg);
    const { eventName, payload, userIds } = msg;
    for (const userId of userIds) {
      try {
        console.log('Storing notification for offline user', userId);
        await this.prisma.userNotification.create({
          data: {
            userId,
            eventName,
            payload: JSON.stringify({ id: payload.entity.id, ...payload.entity }),
            createdAt: new Date(),
            read: false,
            sentToUser: status,
          },
        });
      } catch (err) {
        console.error(`Error storing notification for ${userId}: ${err.message}`);
      }
    }
  }
}
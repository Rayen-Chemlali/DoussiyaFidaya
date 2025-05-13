import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationService } from '../notifications/services/notification.service';
import { PrismaService } from '../notifications/services/prisma.service';

@Controller()
export class NotificationWorkerService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly prisma: PrismaService,
  ) {
    console.log('notification service in worker',notificationService)
  }

  @EventPattern('notification')
  async handleNotification(msg: { eventName: string; payload: any; userIds: string[] }) {
    console.log('this reached me [Event] notification', msg);
    const { eventName, payload, userIds } = msg;
    for (const userId of userIds) {
      const isOnline = await this.notificationService.isUserOnline(userId);
      if (isOnline) {
        console.log('User is online, dispatching event directly',userId);
        await this.notificationService.dispatchEventToUser(userId, eventName, payload);
      } else {
        console.log('User is offline, storing notification',userId);
        const expiresAt = new Date(Date.now() + 86400000); // 24-hour TTL
        await this.prisma.userNotification.create({
          data: {
            userId,
            eventName,
            payload: JSON.stringify({ eventName, entity: { id: payload.entity.id, ...payload.entity } }),
            createdAt: new Date(),
            expiresAt,
          },
        });
      }
    }
  }
}
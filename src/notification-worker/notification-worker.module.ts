import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificationWorkerService } from './notification-worker.service';
import { NotificationsModule } from '../notifications/notifications.module';
import { PrismaService } from '../notifications/services/prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'notifications_queue',
          queueOptions: { durable: true, messageTtl: 86400000 },
        },
      },
    ]),
    NotificationsModule,
  ],
  controllers: [NotificationWorkerService],
  providers: [],
})
export class NotificationWorkerModule {}
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SseController } from './controllers/sse.controller';
import { ActionHistoryController } from './controllers/action-history.controller';
import { NotificationService } from './services/notification.service';
import { UserPreferencesService } from './services/user-preferences.service';
import { PrismaService } from './services/prisma.service';
import { NotificationWorkerService } from '../notification-worker/notification-worker.service';
import { EntityUserRelationUtil } from './utils/entity-user-relation.util';
import { NotificationHandler } from './handlers/notification.handler';
import { PrismaMiddlewareService } from './services/prisma-middleware.service';
import { TestEventController } from './controllers/test-event.controller';
import Redis from 'ioredis';

@Module({
  imports: [EventEmitterModule.forRoot(
    {
      wildcard: true,
    }
  )],
  controllers: [SseController, ActionHistoryController,TestEventController],
  providers: [
    NotificationService,
    UserPreferencesService,
    EntityUserRelationUtil,
    PrismaService,
    NotificationHandler,
    PrismaMiddlewareService,
  ],
  exports: [PrismaService, PrismaMiddlewareService],
})
export class NotificationsModule {}
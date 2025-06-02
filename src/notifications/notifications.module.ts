import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SseController } from './controllers/sse.controller';
import { ActionHistoryController } from './controllers/action-history.controller';
import { NotificationService } from './services/notification.service';
import { NotificationHandler } from './handlers/notification.handler';
import { PrismaMiddlewareService } from './services/prisma-middleware.service';
import { TestEventController } from './controllers/test-event.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [EventEmitterModule.forRoot(
    {
      wildcard: true,
    }
  ),
  PrismaModule],
  controllers: [SseController, ActionHistoryController,TestEventController],
  providers: [
    NotificationService,
    NotificationHandler,
    PrismaMiddlewareService,
  ],
  exports: [ PrismaMiddlewareService],
})
export class NotificationsModule {}
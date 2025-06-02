import { Controller, Sse, Query, Logger, UseGuards, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationService } from '../services/notification.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

interface MessageEvent {
  data: string;
}

interface SseConnectDto {
  userId: string;
  channels: string;
}

@Controller('sse')
export class SseController {
  private readonly logger = new Logger(SseController.name);

  constructor(
    private readonly notificationService: NotificationService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Sse()
  @UseGuards(JwtAuthGuard)
  notifications(@Req() req: any ): Observable<MessageEvent> {
    const userId = req.user.id;
    console.log(userId);
    this.logger.log(`SSE connection for user: ${userId}`);

    return new Observable<MessageEvent>((observer) => {
      let isRegistered = false;
      let listener: ((data: { eventName: string; payload: any }) => void) | null = null;

      this.notificationService.registerClient(userId)
        .then(() => {
          isRegistered = true;

          listener = (data: { eventName: string; payload: any }) => {
            try {
              observer.next({ data: JSON.stringify(data.payload) });
              this.logger.log(`SSE event sent to ${userId}: ${data.eventName} - ${JSON.stringify(data.payload)}`);
            } catch (err) {
              this.logger.error(`Error streaming to ${userId}: ${err.message}`);
            }
          };

          this.eventEmitter.on(`sse.notify:${userId}`, listener);
          this.logger.log(`SSE listener attached: sse.notify:${userId}`);

          return this.notificationService.deliverStoredNotifications(userId);
        })
        .catch((err) => {
          this.logger.error(`Error registering client ${userId}: ${err.message}`);
          observer.error(err);
        });

      return () => {
        if (!isRegistered || !listener) return;

        this.logger.log(`Closing SSE connection for user: ${userId}`);
        this.eventEmitter.removeListener(`sse.notify:${userId}`, listener);
        this.notificationService.unregisterClient(userId)
          .then(() => this.logger.log(`SSE connection closed for user: ${userId}`))
          .catch((err) => this.logger.error(`Error closing SSE for ${userId}: ${err.message}`));
      };
    });
  }
}
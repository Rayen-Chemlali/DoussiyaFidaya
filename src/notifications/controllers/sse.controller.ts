import { Controller, Sse, Query, Logger } from '@nestjs/common';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import Redis from 'ioredis';

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

  constructor(private readonly notificationService: NotificationService) {}

  @Sse()
  notifications(@Query() query: SseConnectDto): Observable<MessageEvent> {
    const userId = query.userId;
    const channels = query.channels.split(',');
    this.logger.log(`SSE connection for user: ${userId}, channels: ${channels.join(', ')}`);

    return new Observable((observer) => {
      this.notificationService.registerClient(userId, channels).then(() => {
        const sub = new Redis({ host: process.env.REDIS_HOST || 'localhost', port: parseInt(process.env.REDIS_PORT || '6379') });
        sub.subscribe(`sse.client.notify:${userId}`);
        sub.on('message', (channel, message) => {
          if (channel === `sse.client.notify:${userId}`) {
            try {
              const { data } = JSON.parse(message);
              observer.next({ data: JSON.stringify(data) } as MessageEvent);
            } catch (err) {
              this.logger.error(`Error parsing message for ${userId}: ${err.message}`);
            }
          }
        });
        observer.next({ data: ':' } as MessageEvent); // Heartbeat
        return () => {
          this.notificationService.unregisterClient(userId).then(() => {
            sub.quit();
            this.logger.log(`SSE connection closed for user: ${userId}`);
          }).catch((err) => {
            this.logger.error(`Error closing SSE for ${userId}: ${err.message}`);
          });
        };
      }).catch((err) => {
        this.logger.error(`Error registering client ${userId}: ${err.message}`);
        observer.error(err);
      });
    });
  }
}
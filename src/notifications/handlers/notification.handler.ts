import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class NotificationHandler {
  constructor(
    private notificationService: NotificationService,
    private eventEmitter: EventEmitter2,
  ) {
    this.eventEmitter.onAny(async (eventName: string, payload: any) => {
      console.log(`Caught event: ${eventName}`);
      try {
        await this.notificationService.dispatchEvent(eventName, payload);
      } catch (err) {
        console.error(`Error handling event ${eventName}: ${err.message}`);
      }
    });
  }
}
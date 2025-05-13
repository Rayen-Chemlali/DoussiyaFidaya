import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class NotificationHandler implements OnModuleInit {
  private readonly logger = new Logger(NotificationHandler.name);

  constructor(private notificationService: NotificationService,private readonly eventEmitter: EventEmitter2) {
    this.logger.log('NotificationHandler initialized');
    this.logger.log('Handler EventEmitter2:', eventEmitter);
  }
  onModuleInit() {
    this.eventEmitter.onAny((event: string, payload: any) => {
      console.log(`Caught event: ${event}`);
      console.log('Payload:', payload);
      this.handleEvent(event, payload).catch((err) => {
        this.logger.error(`Error handling event ${event}: ${err.message}`);
      });
    });
  }

  async handleEvent(eventName: string, payload: any) {
    console.log('this is the eventname', eventName);
    console.log('this is the payload', payload);
    this.logger.log(`Received event: ${eventName}`, JSON.stringify(payload, null, 2));
    await this.notificationService.dispatchEvent(eventName, payload);
  }
}
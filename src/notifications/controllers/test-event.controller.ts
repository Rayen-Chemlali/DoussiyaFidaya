import { Controller, Post, Logger, Inject, UseGuards, Get } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('test-event')
export class TestEventController {
  private readonly logger = new Logger(TestEventController.name);

  constructor(@Inject(EventEmitter2) private eventEmitter: EventEmitter2) {
    this.logger.log('TestEventController initialized');
    this.logger.log('Controller EventEmitter2:', eventEmitter);
  }

  @Get('test')
  async test() {
    const eventName = 'joboffer.test.updated';
    const payload = {
      entity: {
        id: 'test',
        title: 'Test Job Offer',
        isSensitive: false,
        __typename: 'JobOffer',
      },
    };
    console.log('i emitted test event');
    this.logger.log(`Emitting test event: ${eventName}`, JSON.stringify(payload, null, 2));
    this.eventEmitter.emit(eventName, payload);
    return { message: `Test event ${eventName} emitted` };
  }

  @Post('emit')
  async emitTestEvent() {
    const eventName = 'joboffer.test.updated';
    const payload = {
      entity: {
        id: 'test',
        title: 'Test Job Offer',
        isSensitive: false,
        __typename: 'JobOffer',
      },
    };
    this.logger.log(`Emitting test event: ${eventName}`, JSON.stringify(payload, null, 2));
    this.eventEmitter.emit(eventName, payload);
    return { message: `Test event ${eventName} emitted` };
  }
}
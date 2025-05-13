import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { NotificationService } from '../services/notification.service';
import { SseConnectDto } from '../dto/sse-connect.dto';

@Controller('sse')
export class SseController {
  constructor(private notificationService: NotificationService) {}

  @Get()
  async connect(@Query() query: SseConnectDto, @Res() res: Response) {
    res.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    const clientId = query.userId; // Assume userId is provided for simplicity
    await this.notificationService.registerClient(clientId, query.channels.split(','), res);

    res.on('close', () => {
      this.notificationService.unregisterClient(clientId);
    });

    res.write(':\n\n'); // Heartbeat
  }
}
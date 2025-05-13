// src/sse/sse.controller.ts

import { Controller, Get, Req, Res, Query } from '@nestjs/common';
import { SseService } from './sse.service';
import { Request, Response } from 'express';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Get()
  sse(@Req() req: Request, @Res() res: Response, @Query('channels') channels: string) {
    const user = req.user as any; // Ensure authentication middleware sets req.user
    this.sseService.registerClient(user.id, user.role, res);

    if (channels) {
      const channelList = channels.split(',');
      channelList.forEach((channel) => {
        this.sseService.subscribeToChannel(user.id, channel.trim());
      });
    }
  }
}

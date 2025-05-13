// src/sse/sse.service.ts

import { Injectable } from '@nestjs/common';
import { Response } from 'express';

interface SSEClient {
  id: string;
  role: string;
  res: Response;
  channels: Set<string>;
}

@Injectable()
export class SseService {
  private clients: Map<string, SSEClient> = new Map();

  registerClient(id: string, role: string, res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    this.clients.set(id, { id, role, res, channels: new Set() });

    res.on('close', () => {
      this.clients.delete(id);
    });
  }

  subscribeToChannel(userId: string, channel: string) {
    const client = this.clients.get(userId);
    if (client) {
      client.channels.add(channel);
    }
  }

  emit(event: string, data: any) {
    for (const client of this.clients.values()) {
      if (client.channels.has(event)) {
        client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
      }
    }
  }

  emitToUser(userId: string, event: string, data: any) {
    const client = this.clients.get(userId);
    if (client && client.channels.has(event)) {
      client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
    }
  }

  emitToRole(role: string, event: string, data: any) {
    for (const client of this.clients.values()) {
      if (client.role === role && client.channels.has(event)) {
        client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
      }
    }
  }
  getAllClients() {
    return Array.from(this.clients.values());
  }
}

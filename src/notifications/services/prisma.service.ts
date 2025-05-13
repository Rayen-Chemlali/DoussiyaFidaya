import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EventEmitter2 } from '@nestjs/event-emitter';
// import { createPrismaMiddleware } from '../middlewares/prisma.middleware'; // adjust import

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Prisma connection setup
  async onModuleInit() {
    await this.$connect();  // Connect to Prisma when module initializes
  }

  // Prisma disconnection setup
  async onModuleDestroy() {
    await this.$disconnect();  // Disconnect from Prisma when module is destroyed
  }
}

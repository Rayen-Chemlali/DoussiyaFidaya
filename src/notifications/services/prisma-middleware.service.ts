import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaMiddlewareService {
  // private readonly logger = new Logger(PrismaMiddlewareService.name);
  //
  // constructor(private eventEmitter: EventEmitter2) {
  //   this.logger.log('PrismaMiddlewareService initialized');
  //   this.logger.log('Middleware EventEmitter2:', eventEmitter);
  // }
  //
  // applyMiddleware(prisma: PrismaClient, req: any) {
  //   prisma.$use(async (params, next) => {
  //     const result = await next(params);
  //
  //     const isMutation = ['create', 'update', 'delete'].includes(params.action);
  //     if (!isMutation || !params.model || !result) return result;
  //
  //     const entity = result;
  //     const userId = req.user?.userId;
  //     const entityId = entity?.id;
  //     let eventName;
  //
  //     if (entityId) {
  //       eventName = `${params.model.toLowerCase()}.${entityId}.${params.action}d`;
  //     } else {
  //       eventName = `${params.model.toLowerCase()}.${params.action}d`;
  //     }
  //
  //     const payload = { entity: { ...entity, __typename: params.model } };
  //     this.logger.log(`[Event] ${eventName} (user: ${userId})`, JSON.stringify(payload, null, 2));
  //     console.log('this is the payload',payload)
  //     this.eventEmitter.emit(eventName, payload);
  //
  //     if (userId) {
  //       await prisma.actionHistory.create({
  //         data: {
  //           userId,
  //           eventName,
  //           entity,
  //           timestamp: new Date(),
  //           isSensitive: entity.isSensitive || false,
  //           expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
  //         },
  //       }).catch((err) => {
  //         this.logger.error(`Failed to log action: ${err.message}`);
  //       });
  //     }
  //
  //     return result;
  //   });
  // }
}
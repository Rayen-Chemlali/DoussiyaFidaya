// // src/interceptors/notification.interceptor.ts
//
// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
// } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { Observable, tap } from 'rxjs';
// import { EventEmitter2 } from '@nestjs/event-emitter';
// import { parseResolverName } from '../utils/event-name-parser';
//
// @Injectable()
// export class NotificationInterceptor implements NestInterceptor {
//   constructor(private eventBus: EventEmitter2) {}
//
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     const gqlCtx = GqlExecutionContext.create(context);
//     const resolverName = gqlCtx.getInfo().fieldName;
//
//     return next.handle().pipe(
//       tap((result) => {
//         const parsed = parseResolverName(resolverName);
//         if (!parsed) return;
//
//         const { entity, action } = parsed;
//         const id = result?.id;
//         const eventName = id
//           ? `${entity}.${id}.${action}`
//           : `${entity}.${action}`;
//
//         this.eventBus.emit(eventName, {
//           data: result,
//           user: gqlCtx.getContext()?.req?.user, // For targeting notifications
//         });
//       }),
//     );
//   }
// }

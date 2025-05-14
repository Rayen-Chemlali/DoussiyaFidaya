import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { resolvers } from '../generated/type-graphql'; // './node_modules/@generated/typegraphql-prisma'
import { buildSchemaSync } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { NotificationsModule } from './notifications/notifications.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaMiddlewareService } from './notifications/services/prisma-middleware.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import Redis from 'ioredis';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local','.env'],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`,
        }),
      }),
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'your-secret-key', signOptions: { expiresIn: '1h' } }),
    EventEmitterModule.forRoot(),
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      imports: [NotificationsModule],
      inject: [PrismaMiddlewareService],
      useFactory: (prismaMiddleware: PrismaMiddlewareService): YogaDriverConfig => ({
        driver: YogaDriver,
        schema: buildSchemaSync({
          resolvers,
          validate: false,
          emitSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        context: ({ req }) => {
          const prisma = new PrismaClient();
          prismaMiddleware.applyMiddleware(prisma, req);
          const userId = req.user?.userId;
          return { req, prisma, userId };
        },
      }),
    }),
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}

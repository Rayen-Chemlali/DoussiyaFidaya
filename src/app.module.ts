import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { resolvers } from '../generated/type-graphql'; // './node_modules/@generated/typegraphql-prisma'
import { buildSchemaSync } from 'type-graphql';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { PrismaService } from '../prisma.service';
import { createGeneratedResolverProviders } from '../generate-resolvers';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from './mailer/mailer.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoggerMiddleware } from './middlemare';
import { ChatModule } from './chat/chat.module';


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
          // prismaMiddleware.applyMiddleware(prisma, req);
          const userId = req.user?.userId;
          return { req, prisma, userId };
        },
      }),
    }),
    AuthModule,
    MailerModule,
    PrismaModule,
    ChatModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

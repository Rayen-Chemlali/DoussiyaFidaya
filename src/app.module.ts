import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { resolvers } from '../generated/type-graphql'; // './node_modules/@generated/typegraphql-prisma'
import { buildSchemaSync } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { AuthModule } from './auth/auth.module';
import { MailerModule } from './mailer/mailer.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoggerMiddleware } from './middlemare';
import { ChatModule } from './chat/chat.module';


import { NotificationsModule } from './notifications/notifications.module';
import { PrismaMiddlewareService } from './notifications/services/prisma-middleware.service';
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
          prismaMiddleware.applyMiddleware(prisma, req);
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

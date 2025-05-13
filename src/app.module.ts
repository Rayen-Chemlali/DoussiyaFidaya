import { Module } from '@nestjs/common';
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


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local','.env'],
    }),
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      schema: buildSchemaSync({
        resolvers,
        validate: false,
        emitSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }as any),
      context: () => ({ prisma }), // Make Prisma available in resolvers
    }),
    AuthModule,
    MailerModule,
    PrismaModule,
    PrismaModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

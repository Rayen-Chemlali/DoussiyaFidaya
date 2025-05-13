import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Prisma } from '@prisma/client';
import { MailerModule } from 'src/mailer/mailer.module';
import { MailerService } from 'src/mailer/mailer.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { VerificationModule } from 'src/utils/verification/verification.module';

@Module({
  imports: [MailerModule , PrismaModule,
    JwtModule.register({
      secret: "123456789",
      signOptions: { expiresIn: '3h' }, 
      
  }),
  VerificationModule,
  ],
  controllers: [AuthController],
  providers: [AuthService , MailerService],
})
export class AuthModule {}

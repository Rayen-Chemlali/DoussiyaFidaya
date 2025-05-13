import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VerificationService } from './verification.service';
import { PrismaService } from 'prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [VerificationService, PrismaService],
  exports: [VerificationService],
})
export class VerificationModule {}
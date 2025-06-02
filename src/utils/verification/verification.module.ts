import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VerificationService } from './verification.service';

@Module({
  imports: [PrismaModule],
  providers: [VerificationService],
  exports: [VerificationService],
})
export class VerificationModule {}
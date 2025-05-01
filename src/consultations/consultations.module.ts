import { Module } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ConsultationsResolver } from './consultations.resolver';

@Module({
  providers: [ConsultationsResolver, ConsultationsService],
})
export class ConsultationsModule {}

import { Module } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ConsultationsResolver } from './consultations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinique } from '../cliniques/entities/clinique.entity';
import { Consultation } from './entities/consultation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consultation])],
  providers: [ConsultationsResolver, ConsultationsService],
})
export class ConsultationsModule {}

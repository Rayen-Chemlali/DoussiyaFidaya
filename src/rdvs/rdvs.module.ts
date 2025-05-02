import { Module } from '@nestjs/common';
import { RdvsService } from './rdvs.service';
import { RdvsResolver } from './rdvs.resolver';
import { Patient } from '../patients/entities/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [RdvsResolver, RdvsService],
})
export class RdvsModule {}

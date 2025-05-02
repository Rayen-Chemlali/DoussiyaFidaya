import { Module } from '@nestjs/common';
import { XrayResultsService } from './xray-results.service';
import { XrayResultsResolver } from './xray-results.resolver';
import { Patient } from '../patients/entities/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [XrayResultsResolver, XrayResultsService],
})
export class XrayResultsModule {}

import { Module } from '@nestjs/common';
import { LabResultsService } from './lab-results.service';
import { LabResultsResolver } from './lab-results.resolver';
import { LabResult } from './entities/lab-result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LabResult])],

  providers: [LabResultsResolver, LabResultsService],
})
export class LabResultsModule {}

import { Module } from '@nestjs/common';
import { LabResultsService } from './lab-results.service';
import { LabResultsResolver } from './lab-results.resolver';

@Module({
  providers: [LabResultsResolver, LabResultsService],
})
export class LabResultsModule {}

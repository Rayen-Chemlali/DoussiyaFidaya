import { Module } from '@nestjs/common';
import { AnalysisResultsService } from './analysis-results.service';
import { AnalysisResultsResolver } from './analysis-results.resolver';

@Module({
  providers: [AnalysisResultsResolver, AnalysisResultsService],
})
export class AnalysisResultsModule {}

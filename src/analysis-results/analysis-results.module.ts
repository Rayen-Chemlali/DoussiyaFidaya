import { Module } from '@nestjs/common';
import { AnalysisResultsService } from './analysis-results.service';
import { AnalysisResultsResolver } from './analysis-results.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalysisResult } from './entities/analysis-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnalysisResult])],
  providers: [AnalysisResultsResolver, AnalysisResultsService],
})
export class AnalysisResultsModule {}

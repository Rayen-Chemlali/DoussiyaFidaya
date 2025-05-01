import { Test, TestingModule } from '@nestjs/testing';
import { AnalysisResultsResolver } from './analysis-results.resolver';
import { AnalysisResultsService } from './analysis-results.service';

describe('AnalysisResultsResolver', () => {
  let resolver: AnalysisResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalysisResultsResolver, AnalysisResultsService],
    }).compile();

    resolver = module.get<AnalysisResultsResolver>(AnalysisResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

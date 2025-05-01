import { Test, TestingModule } from '@nestjs/testing';
import { LabResultsResolver } from './lab-results.resolver';
import { LabResultsService } from './lab-results.service';

describe('LabResultsResolver', () => {
  let resolver: LabResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabResultsResolver, LabResultsService],
    }).compile();

    resolver = module.get<LabResultsResolver>(LabResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

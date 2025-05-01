import { Test, TestingModule } from '@nestjs/testing';
import { CtScanResultsResolver } from './ct-scan-results.resolver';
import { CtScanResultsService } from './ct-scan-results.service';

describe('CtScanResultsResolver', () => {
  let resolver: CtScanResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtScanResultsResolver, CtScanResultsService],
    }).compile();

    resolver = module.get<CtScanResultsResolver>(CtScanResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

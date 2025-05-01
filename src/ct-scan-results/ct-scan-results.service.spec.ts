import { Test, TestingModule } from '@nestjs/testing';
import { CtScanResultsService } from './ct-scan-results.service';

describe('CtScanResultsService', () => {
  let service: CtScanResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtScanResultsService],
    }).compile();

    service = module.get<CtScanResultsService>(CtScanResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { XrayResultsService } from './xray-results.service';

describe('XrayResultsService', () => {
  let service: XrayResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XrayResultsService],
    }).compile();

    service = module.get<XrayResultsService>(XrayResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { XrayResultsResolver } from './xray-results.resolver';
import { XrayResultsService } from './xray-results.service';

describe('XrayResultsResolver', () => {
  let resolver: XrayResultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XrayResultsResolver, XrayResultsService],
    }).compile();

    resolver = module.get<XrayResultsResolver>(XrayResultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

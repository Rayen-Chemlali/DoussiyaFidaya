import { Test, TestingModule } from '@nestjs/testing';
import { RdvRequestsResolver } from './rdv-requests.resolver';
import { RdvRequestsService } from './rdv-requests.service';

describe('RdvRequestsResolver', () => {
  let resolver: RdvRequestsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdvRequestsResolver, RdvRequestsService],
    }).compile();

    resolver = module.get<RdvRequestsResolver>(RdvRequestsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

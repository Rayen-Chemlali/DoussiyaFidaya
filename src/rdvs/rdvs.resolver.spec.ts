import { Test, TestingModule } from '@nestjs/testing';
import { RdvsResolver } from './rdvs.resolver';
import { RdvsService } from './rdvs.service';

describe('RdvsResolver', () => {
  let resolver: RdvsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdvsResolver, RdvsService],
    }).compile();

    resolver = module.get<RdvsResolver>(RdvsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PharmacysResolver } from './pharmacys.resolver';
import { PharmacysService } from './pharmacys.service';

describe('PharmacysResolver', () => {
  let resolver: PharmacysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacysResolver, PharmacysService],
    }).compile();

    resolver = module.get<PharmacysResolver>(PharmacysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

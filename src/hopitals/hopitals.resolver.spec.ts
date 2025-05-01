import { Test, TestingModule } from '@nestjs/testing';
import { HopitalsResolver } from './hopitals.resolver';
import { HopitalsService } from './hopitals.service';

describe('HopitalsResolver', () => {
  let resolver: HopitalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopitalsResolver, HopitalsService],
    }).compile();

    resolver = module.get<HopitalsResolver>(HopitalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

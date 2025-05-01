import { Test, TestingModule } from '@nestjs/testing';
import { ConsultationsResolver } from './consultations.resolver';
import { ConsultationsService } from './consultations.service';

describe('ConsultationsResolver', () => {
  let resolver: ConsultationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultationsResolver, ConsultationsService],
    }).compile();

    resolver = module.get<ConsultationsResolver>(ConsultationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

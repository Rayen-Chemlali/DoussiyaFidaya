import { Test, TestingModule } from '@nestjs/testing';
import { CliniquesResolver } from './cliniques.resolver';
import { CliniquesService } from './cliniques.service';

describe('CliniquesResolver', () => {
  let resolver: CliniquesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliniquesResolver, CliniquesService],
    }).compile();

    resolver = module.get<CliniquesResolver>(CliniquesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

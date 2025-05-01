import { Test, TestingModule } from '@nestjs/testing';
import { InstitutMedicalsResolver } from './institut-medicals.resolver';
import { InstitutMedicalsService } from './institut-medicals.service';

describe('InstitutMedicalsResolver', () => {
  let resolver: InstitutMedicalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutMedicalsResolver, InstitutMedicalsService],
    }).compile();

    resolver = module.get<InstitutMedicalsResolver>(InstitutMedicalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

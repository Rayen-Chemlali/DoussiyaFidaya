import { Test, TestingModule } from '@nestjs/testing';
import { InstitutMedicalsService } from './institut-medicals.service';

describe('InstitutMedicalsService', () => {
  let service: InstitutMedicalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutMedicalsService],
    }).compile();

    service = module.get<InstitutMedicalsService>(InstitutMedicalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CliniquesService } from './cliniques.service';

describe('CliniquesService', () => {
  let service: CliniquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliniquesService],
    }).compile();

    service = module.get<CliniquesService>(CliniquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

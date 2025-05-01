import { Test, TestingModule } from '@nestjs/testing';
import { GeneralMedicalRecordsService } from './general-medical-records.service';

describe('GeneralMedicalRecordsService', () => {
  let service: GeneralMedicalRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralMedicalRecordsService],
    }).compile();

    service = module.get<GeneralMedicalRecordsService>(GeneralMedicalRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

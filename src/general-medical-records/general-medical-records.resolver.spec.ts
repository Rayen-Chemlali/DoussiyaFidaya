import { Test, TestingModule } from '@nestjs/testing';
import { GeneralMedicalRecordsResolver } from './general-medical-records.resolver';
import { GeneralMedicalRecordsService } from './general-medical-records.service';

describe('GeneralMedicalRecordsResolver', () => {
  let resolver: GeneralMedicalRecordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralMedicalRecordsResolver, GeneralMedicalRecordsService],
    }).compile();

    resolver = module.get<GeneralMedicalRecordsResolver>(GeneralMedicalRecordsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MedicationsResolver } from './medications.resolver';
import { MedicationsService } from './medications.service';

describe('MedicationsResolver', () => {
  let resolver: MedicationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicationsResolver, MedicationsService],
    }).compile();

    resolver = module.get<MedicationsResolver>(MedicationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

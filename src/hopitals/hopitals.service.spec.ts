import { Test, TestingModule } from '@nestjs/testing';
import { HopitalsService } from './hopitals.service';

describe('HopitalsService', () => {
  let service: HopitalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopitalsService],
    }).compile();

    service = module.get<HopitalsService>(HopitalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

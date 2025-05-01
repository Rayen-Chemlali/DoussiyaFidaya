import { Test, TestingModule } from '@nestjs/testing';
import { RdvsService } from './rdvs.service';

describe('RdvsService', () => {
  let service: RdvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdvsService],
    }).compile();

    service = module.get<RdvsService>(RdvsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

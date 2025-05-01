import { Test, TestingModule } from '@nestjs/testing';
import { LabRequestsService } from './lab-requests.service';

describe('LabRequestsService', () => {
  let service: LabRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabRequestsService],
    }).compile();

    service = module.get<LabRequestsService>(LabRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

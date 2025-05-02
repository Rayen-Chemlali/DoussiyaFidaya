import { Test, TestingModule } from '@nestjs/testing';
import { RdvRequestsService } from './rdv-requests.service';

describe('RdvRequestsService', () => {
  let service: RdvRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdvRequestsService],
    }).compile();

    service = module.get<RdvRequestsService>(RdvRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

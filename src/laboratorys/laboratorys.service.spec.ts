import { Test, TestingModule } from '@nestjs/testing';
import { LaboratorysService } from './laboratorys.service';

describe('LaboratorysService', () => {
  let service: LaboratorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratorysService],
    }).compile();

    service = module.get<LaboratorysService>(LaboratorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LabAttachmentsService } from './lab-attachments.service';

describe('LabAttachmentsService', () => {
  let service: LabAttachmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabAttachmentsService],
    }).compile();

    service = module.get<LabAttachmentsService>(LabAttachmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

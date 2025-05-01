import { Test, TestingModule } from '@nestjs/testing';
import { LabDocumentsService } from './lab-documents.service';

describe('LabDocumentsService', () => {
  let service: LabDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabDocumentsService],
    }).compile();

    service = module.get<LabDocumentsService>(LabDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LabDocumentsResolver } from './lab-documents.resolver';
import { LabDocumentsService } from './lab-documents.service';

describe('LabDocumentsResolver', () => {
  let resolver: LabDocumentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabDocumentsResolver, LabDocumentsService],
    }).compile();

    resolver = module.get<LabDocumentsResolver>(LabDocumentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

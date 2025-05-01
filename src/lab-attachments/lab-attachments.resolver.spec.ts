import { Test, TestingModule } from '@nestjs/testing';
import { LabAttachmentsResolver } from './lab-attachments.resolver';
import { LabAttachmentsService } from './lab-attachments.service';

describe('LabAttachmentsResolver', () => {
  let resolver: LabAttachmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabAttachmentsResolver, LabAttachmentsService],
    }).compile();

    resolver = module.get<LabAttachmentsResolver>(LabAttachmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

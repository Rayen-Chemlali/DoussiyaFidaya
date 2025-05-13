import { Test, TestingModule } from '@nestjs/testing';
import { MesssagesService } from './messages.service';

describe('MesssagesService', () => {
  let service: MesssagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MesssagesService],
    }).compile();

    service = module.get<MesssagesService>(MesssagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

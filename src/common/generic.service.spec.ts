import { Test, TestingModule } from '@nestjs/testing';
import { GenericService } from './generic.service';

describe('GenericService', () => {
  let service: GenericService<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenericService],
    }).compile();

    service = module.get<GenericService<any>>(GenericService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

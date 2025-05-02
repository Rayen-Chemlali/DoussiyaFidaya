import { Test, TestingModule } from '@nestjs/testing';
import { GenericService } from './generic.service';

describe('GenericService', () => {
  let service: GenericService<any, any, any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenericService],
    }).compile();

    service = module.get<GenericService<any, any, any>>(GenericService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

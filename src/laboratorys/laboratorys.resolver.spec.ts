import { Test, TestingModule } from '@nestjs/testing';
import { LaboratorysResolver } from './laboratorys.resolver';
import { LaboratorysService } from './laboratorys.service';

describe('LaboratorysResolver', () => {
  let resolver: LaboratorysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratorysResolver, LaboratorysService],
    }).compile();

    resolver = module.get<LaboratorysResolver>(LaboratorysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

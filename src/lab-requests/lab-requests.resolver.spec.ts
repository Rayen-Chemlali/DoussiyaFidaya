import { Test, TestingModule } from '@nestjs/testing';
import { LabRequestsResolver } from './lab-requests.resolver';
import { LabRequestsService } from './lab-requests.service';

describe('LabRequestsResolver', () => {
  let resolver: LabRequestsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabRequestsResolver, LabRequestsService],
    }).compile();

    resolver = module.get<LabRequestsResolver>(LabRequestsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

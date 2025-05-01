import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizationsResolver } from './authorizations.resolver';
import { AuthorizationsService } from './authorizations.service';

describe('AuthorizationsResolver', () => {
  let resolver: AuthorizationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorizationsResolver, AuthorizationsService],
    }).compile();

    resolver = module.get<AuthorizationsResolver>(AuthorizationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

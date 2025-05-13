import { Test, TestingModule } from '@nestjs/testing';
import { MesssagesGateway } from './messages.gateway';
import { MesssagesService } from './messages.service';

describe('MesssagesGateway', () => {
  let gateway: MesssagesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MesssagesGateway, MesssagesService],
    }).compile();

    gateway = module.get<MesssagesGateway>(MesssagesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

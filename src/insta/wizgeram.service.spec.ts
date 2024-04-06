import { Test, TestingModule } from '@nestjs/testing';
import { WizgeramService } from './wizgeram.service';

describe('WizgeramService', () => {
  let service: WizgeramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WizgeramService],
    }).compile();

    service = module.get<WizgeramService>(WizgeramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

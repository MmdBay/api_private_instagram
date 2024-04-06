import { Test, TestingModule } from '@nestjs/testing';
import { InstaService } from './insta.service';

describe('InstaService', () => {
  let service: InstaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstaService],
    }).compile();

    service = module.get<InstaService>(InstaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

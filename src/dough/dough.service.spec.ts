import { Test, TestingModule } from '@nestjs/testing';
import { DoughService } from './dough.service';

describe('DoughService', () => {
  let service: DoughService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoughService],
    }).compile();

    service = module.get<DoughService>(DoughService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all types of dough', async () => {
    const dough = await service.findAll();

    expect(dough).toHaveLength(1);
  });
});

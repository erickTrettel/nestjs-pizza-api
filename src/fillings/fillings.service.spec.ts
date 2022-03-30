import { Test, TestingModule } from '@nestjs/testing';
import { FillingsService } from './fillings.service';

describe('FillingsService', () => {
  let service: FillingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FillingsService],
    }).compile();

    service = module.get<FillingsService>(FillingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all fillings', async () => {
    const fillings = await service.findAll();

    expect(fillings).toHaveLength(4);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FillingService } from './fillings.service';

describe('FillingService', () => {
  let service: FillingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FillingService],
    }).compile();

    service = module.get<FillingService>(FillingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all fillings', async () => {
    const fillings = await service.findAll();

    expect(fillings).toHaveLength(4);
  });
});

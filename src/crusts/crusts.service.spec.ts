import { Test, TestingModule } from '@nestjs/testing';
import { CrustService } from './crusts.service';

describe('CrustsService', () => {
  let service: CrustService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrustService],
    }).compile();

    service = module.get<CrustService>(CrustService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all crusts', async () => {
    const crusts = await service.findAll();

    expect(crusts).toHaveLength(5);
  });
});

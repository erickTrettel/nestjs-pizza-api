import { Test, TestingModule } from '@nestjs/testing';
import { DaySuggestionService } from './day-suggestion.service';

describe('DaySuggestionService', () => {
  let service: DaySuggestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaySuggestionService],
    }).compile();

    service = module.get<DaySuggestionService>(DaySuggestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.todo('get day suggestion by day of the week');
});

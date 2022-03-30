import { Module } from '@nestjs/common';

import { DaySuggestionService } from './day-suggestion.service';
import { DaySuggestionController } from './day-suggestion.controller';

import { DoughModule } from 'src/dough/dough.module';
import { SizesModule } from 'src/sizes/sizes.module';
import { CrustsModule } from 'src/crusts/crusts.module';
import { FillingsModule } from 'src/fillings/fillings.module';

@Module({
  imports: [DoughModule, SizesModule, CrustsModule, FillingsModule],
  providers: [DaySuggestionService],
  controllers: [DaySuggestionController],
})
export class DaySuggestionModule {}

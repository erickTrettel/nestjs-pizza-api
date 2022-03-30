import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrustsModule } from './crusts/crusts.module';
import { DoughModule } from './dough/dough.module';
import { FillingsModule } from './fillings/fillings.module';
import { SizesModule } from './sizes/sizes.module';
import { DaySuggestionModule } from './day-suggestion/day-suggestion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CrustsModule,
    DoughModule,
    FillingsModule,
    SizesModule,
    DaySuggestionModule,
  ],
})
export class AppModule {}

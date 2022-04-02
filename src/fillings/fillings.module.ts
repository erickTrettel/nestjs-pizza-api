import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FillingService } from './fillings.service';
import { FillingsController } from './fillings.controller';
import { FillingDto, IngredientDto } from './dto';

@Module({
  imports: [TypeOrmModule.forFeature([FillingDto, IngredientDto])],
  providers: [FillingService],
  controllers: [FillingsController],
  exports: [FillingService],
})
export class FillingsModule {}

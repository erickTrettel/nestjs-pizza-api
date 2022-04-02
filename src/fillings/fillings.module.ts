import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FillingService } from './fillings.service';
import { FillingsController } from './fillings.controller';
import { Filling, Ingredient } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Filling, Ingredient])],
  providers: [FillingService],
  controllers: [FillingsController],
  exports: [FillingService],
})
export class FillingsModule {}

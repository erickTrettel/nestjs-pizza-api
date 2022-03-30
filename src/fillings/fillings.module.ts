import { Module } from '@nestjs/common';
import { FillingService } from './fillings.service';
import { FillingsController } from './fillings.controller';

@Module({
  providers: [FillingService],
  controllers: [FillingsController],
})
export class FillingsModule {}

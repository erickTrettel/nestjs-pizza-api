import { Module } from '@nestjs/common';
import { FillingsService } from './fillings.service';
import { FillingsController } from './fillings.controller';

@Module({
  providers: [FillingsService],
  controllers: [FillingsController],
})
export class FillingsModule {}

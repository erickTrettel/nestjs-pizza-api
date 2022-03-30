import { Module } from '@nestjs/common';
import { SizeService } from './sizes.service';
import { SizesController } from './sizes.controller';

@Module({
  providers: [SizeService],
  controllers: [SizesController],
  exports: [SizeService],
})
export class SizesModule {}

import { Module } from '@nestjs/common';
import { SizeService } from './sizes.service';
import { SizesController } from './sizes.controller';

@Module({
  providers: [SizeService],
  controllers: [SizesController],
})
export class SizesModule {}

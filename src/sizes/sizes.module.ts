import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SizeService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { SizeDto } from './dto';

@Module({
  imports: [TypeOrmModule.forFeature([SizeDto])],
  providers: [SizeService],
  controllers: [SizesController],
  exports: [SizeService],
})
export class SizesModule {}

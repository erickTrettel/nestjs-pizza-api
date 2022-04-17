import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SizeService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { Size } from './entities';

@Module({
  imports: [CacheModule.register(), TypeOrmModule.forFeature([Size])],
  providers: [SizeService],
  controllers: [SizesController],
  exports: [SizeService],
})
export class SizesModule {}

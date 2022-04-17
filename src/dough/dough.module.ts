import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoughService } from './dough.service';
import { DoughController } from './dough.controller';
import { Dough } from './entities';

@Module({
  imports: [CacheModule.register(), TypeOrmModule.forFeature([Dough])],
  providers: [DoughService],
  controllers: [DoughController],
  exports: [DoughService],
})
export class DoughModule {}

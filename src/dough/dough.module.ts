import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoughService } from './dough.service';
import { DoughController } from './dough.controller';
import { DoughDto } from './dto';

@Module({
  imports: [TypeOrmModule.forFeature([DoughDto])],
  providers: [DoughService],
  controllers: [DoughController],
  exports: [DoughService],
})
export class DoughModule {}

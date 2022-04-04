import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CrustService } from './crusts.service';
import { CrustsController } from './crusts.controller';
import { Crust } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Crust])],
  providers: [CrustService],
  controllers: [CrustsController],
  exports: [CrustService],
})
export class CrustsModule {}

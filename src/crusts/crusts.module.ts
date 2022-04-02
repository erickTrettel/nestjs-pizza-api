import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CrustService } from './crusts.service';
import { CrustsController } from './crusts.controller';
import { CrustDto } from './dto';

@Module({
  imports: [TypeOrmModule.forFeature([CrustDto])],
  providers: [CrustService],
  controllers: [CrustsController],
  exports: [CrustService],
})
export class CrustsModule {}

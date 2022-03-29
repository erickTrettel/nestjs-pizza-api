import { Module } from '@nestjs/common';
import { CrustService } from './crusts.service';
import { CrustsController } from './crusts.controller';

@Module({
  providers: [CrustService],
  controllers: [CrustsController],
})
export class CrustsModule {}

import { Controller, Get } from '@nestjs/common';
import { CrustService } from './crusts.service';

@Controller('crusts')
export class CrustsController {
  constructor(private crustService: CrustService) {}

  @Get()
  getCrusts() {
    return this.crustService.findAll();
  }
}

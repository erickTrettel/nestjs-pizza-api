import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrustService } from './crusts.service';
import { CreateCrustDto } from './dto';

@Controller('crusts')
export class CrustsController {
  constructor(private crustService: CrustService) {}

  @Get()
  getCrusts() {
    return this.crustService.findAll();
  }

  @Post()
  createCrust(@Body() dto: CreateCrustDto) {
    return this.crustService.create(dto);
  }
}

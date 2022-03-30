import { Controller, Get } from '@nestjs/common';
import { SizeService } from './sizes.service';

@Controller('sizes')
export class SizesController {
  constructor(private service: SizeService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
}

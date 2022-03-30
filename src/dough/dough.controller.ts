import { Controller, Get } from '@nestjs/common';
import { DoughService } from './dough.service';

@Controller('dough')
export class DoughController {
  constructor(private service: DoughService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
}

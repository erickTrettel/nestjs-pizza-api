import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoughService } from './dough.service';
import { CreateDoughDto } from './dto';

@Controller('dough')
export class DoughController {
  constructor(private service: DoughService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  createDough(@Body() dto: CreateDoughDto) {
    return this.service.create(dto);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFillingDto } from './dto';
import { FillingService } from './fillings.service';

@Controller('fillings')
export class FillingsController {
  constructor(private service: FillingService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  createFilling(@Body() dto: CreateFillingDto) {
    return this.service.create(dto);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSizeDto } from './dto';
import { SizeService } from './sizes.service';

@Controller('sizes')
export class SizesController {
  constructor(private service: SizeService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  createSize(@Body() dto: CreateSizeDto) {
    return this.service.create(dto);
  }
}

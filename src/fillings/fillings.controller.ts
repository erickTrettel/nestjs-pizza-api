import { Controller, Get } from '@nestjs/common';
import { FillingsService } from './fillings.service';

@Controller('fillings')
export class FillingsController {
  constructor(private service: FillingsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
}

import { Controller, Get } from '@nestjs/common';
import { FillingService } from './fillings.service';

@Controller('fillings')
export class FillingsController {
  constructor(private service: FillingService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
}

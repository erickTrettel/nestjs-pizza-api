import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateFillingDto } from './dto';
import { Filling } from './entities';
import { FillingService } from './fillings.service';

@Controller('fillings')
export class FillingsController {
  constructor(
    private service: FillingService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getAll() {
    const cached: Filling[] = await this.cacheManager.get('fillings');

    if (cached?.length > 0) return cached;

    const fillings = await this.service.findAll();

    this.cacheManager.set('fillings', fillings, { ttl: 60 * 60 }); // 1 hour

    return fillings;
  }

  @Post()
  async createFilling(@Body() dto: CreateFillingDto) {
    const filling = await this.service.create(dto);

    this.cacheManager.del('fillings');

    return filling;
  }
}

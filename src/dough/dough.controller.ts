import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { DoughService } from './dough.service';
import { CreateDoughDto } from './dto';
import { Dough } from './entities';

@Controller('dough')
export class DoughController {
  constructor(
    private service: DoughService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getAll() {
    const cached: Dough[] = await this.cacheManager.get('dough');

    if (cached?.length > 0) return cached;

    const dough = await this.service.findAll();

    this.cacheManager.set('dough', dough, { ttl: 60 * 60 }); // 1 hour

    return dough;
  }

  @Post()
  async createDough(@Body() dto: CreateDoughDto) {
    const dough = await this.service.create(dto);

    this.cacheManager.del('dough');

    return dough;
  }
}

import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

import { CreateSizeDto } from './dto';
import { Size } from './entities';
import { SizeService } from './sizes.service';

@Controller('sizes')
export class SizesController {
  constructor(
    private service: SizeService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getAll() {
    const cached: Size[] = await this.cacheManager.get('sizes');

    if (cached?.length > 0) return cached;

    const sizes = await this.service.findAll();

    this.cacheManager.set('sizes', sizes, { ttl: 60 * 60 }); // 1 hour

    return sizes;
  }

  @Post()
  async createSize(@Body() dto: CreateSizeDto) {
    const size = await this.service.create(dto);

    this.cacheManager.del('sizes');

    return size;
  }
}

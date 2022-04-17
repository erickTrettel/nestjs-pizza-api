import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CrustService } from './crusts.service';
import { CreateCrustDto } from './dto';
import { Crust } from './entities';

@Controller('crusts')
export class CrustsController {
  constructor(
    private crustService: CrustService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getCrusts() {
    const cached: Crust[] = await this.cacheManager.get('crusts');

    if (cached?.length > 0) return cached;

    const crusts = await this.crustService.findAll();

    this.cacheManager.set('crusts', crusts, { ttl: 60 * 60 }); // 1 hour

    return crusts;
  }

  @Post()
  async createCrust(@Body() dto: CreateCrustDto) {
    const crust = await this.crustService.create(dto);

    this.cacheManager.del('crusts');

    return crust;
  }
}

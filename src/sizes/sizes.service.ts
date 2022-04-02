import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSizeDto } from './dto';
import { Size } from './entities';

@Injectable()
export class SizeService {
  constructor(@InjectRepository(Size) private repository: Repository<Size>) {}

  findAll(): Promise<Size[]> {
    return this.repository.find();
  }

  create(dto: CreateSizeDto) {
    return this.repository.save(dto);
  }
}

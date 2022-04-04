import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDoughDto } from './dto';
import { Dough } from './entities';

@Injectable()
export class DoughService {
  constructor(@InjectRepository(Dough) private repository: Repository<Dough>) {}

  findAll(): Promise<Dough[]> {
    return this.repository.find();
  }

  create(dto: CreateDoughDto) {
    return this.repository.save(dto);
  }
}

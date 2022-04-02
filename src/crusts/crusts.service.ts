import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCrustDto } from './dto';
import { Crust } from './entities';

@Injectable()
export class CrustService {
  constructor(@InjectRepository(Crust) private repository: Repository<Crust>) {}

  findAll(): Promise<Crust[]> {
    return this.repository.find();
  }

  create(dto: CreateCrustDto) {
    return this.repository.save(dto);
  }
}

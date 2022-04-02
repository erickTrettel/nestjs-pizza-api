import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filling } from './entities';

@Injectable()
export class FillingService {
  constructor(
    @InjectRepository(Filling) private repository: Repository<Filling>,
  ) {}

  async findAll(): Promise<Filling[]> {
    return this.repository.find();
  }
}

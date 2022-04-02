import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoughDto } from './dto';

@Injectable()
export class DoughService {
  constructor(
    @InjectRepository(DoughDto) private repository: Repository<DoughDto>,
  ) {}

  findAll(): Promise<DoughDto[]> {
    return this.repository.find();
  }
}

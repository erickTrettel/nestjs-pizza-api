import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeDto } from './dto';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(SizeDto) private repository: Repository<SizeDto>,
  ) {}

  findAll(): Promise<SizeDto[]> {
    return this.repository.find();
  }
}

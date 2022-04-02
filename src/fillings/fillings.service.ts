import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FillingDto } from './dto';

@Injectable()
export class FillingService {
  constructor(
    @InjectRepository(FillingDto) private repository: Repository<FillingDto>,
  ) {}

  async findAll(): Promise<FillingDto[]> {
    return this.repository.find();
  }
}

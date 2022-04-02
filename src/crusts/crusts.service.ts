import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrustDto } from './dto';

@Injectable()
export class CrustService {
  constructor(
    @InjectRepository(CrustDto) private repository: Repository<CrustDto>,
  ) {}

  findAll(): Promise<CrustDto[]> {
    return this.repository.find();
  }
}

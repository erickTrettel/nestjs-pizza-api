import { Injectable } from '@nestjs/common';
import { DoughDto } from './dto';

@Injectable()
export class DoughService {
  async findAll(): Promise<DoughDto[]> {
    const dough: DoughDto[] = [{ description: 'Massa de pizza' }];

    return dough;
  }
}

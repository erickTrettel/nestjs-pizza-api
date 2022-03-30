import { Injectable } from '@nestjs/common';
import { SizeDto } from './dto';

@Injectable()
export class SizeService {
  async findAll(): Promise<SizeDto[]> {
    const sizes = [
      { description: 'Pequena', slices: 6 },
      { description: 'Média', slices: 8 },
      { description: 'Grande', slices: 10 },
      { description: 'Família', slices: 12 },
      { description: 'Gigante', slices: 16 },
    ];

    return sizes;
  }
}

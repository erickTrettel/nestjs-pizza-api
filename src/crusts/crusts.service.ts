import { Injectable } from '@nestjs/common';
import { CrustDto } from './dto';

@Injectable()
export class CrustService {
  async findAll(): Promise<CrustDto[]> {
    const crusts: CrustDto[] = [
      { description: 'Borda simples' },
      { description: 'Gravata borboleta' },
      { description: 'Corda' },
      { description: 'Estrela' },
      { description: 'Vulcão' },
    ];

    return crusts;
  }
}

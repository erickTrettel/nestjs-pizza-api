import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFillingDto } from './dto';
import { Filling, Ingredient } from './entities';

@Injectable()
export class FillingService {
  constructor(
    @InjectRepository(Filling) private fillingRepository: Repository<Filling>,
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  findAll(): Promise<Filling[]> {
    return this.fillingRepository.find({ relations: ['ingredients'] });
  }

  async create(dto: CreateFillingDto) {
    const filling = await this.fillingRepository.save(dto);

    await this.ingredientRepository.save(
      dto.ingredients.map((ingredient) => ({
        filling,
        ...ingredient,
      })),
    );

    return filling;
  }
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity({ name: 'fillings' })
export class Filling {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany((type) => Ingredient, (ingredient) => ingredient.filling)
  ingredients: Ingredient[];
}

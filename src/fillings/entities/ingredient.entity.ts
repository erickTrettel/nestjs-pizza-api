import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Filling } from './filling.entity';

@Entity({ name: 'ingredients' })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => Filling)
  filling: Filling;
}

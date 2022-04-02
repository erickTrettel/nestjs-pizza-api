import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'fillings' })
export class FillingDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany((type) => IngredientDto, (ingredient) => ingredient.filling)
  ingredients: IngredientDto[];
}

@Entity({ name: 'ingredients' })
export class IngredientDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne((type) => FillingDto)
  filling: FillingDto;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'crusts' })
export class Crust {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dough' })
export class Dough {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}

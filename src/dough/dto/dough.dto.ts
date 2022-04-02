import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dough' })
export class DoughDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}

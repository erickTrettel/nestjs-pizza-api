import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sizes' })
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  slices: number;
}

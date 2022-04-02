import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sizes' })
export class SizeDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  slices: number;
}

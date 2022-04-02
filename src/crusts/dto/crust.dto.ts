import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'crusts' })
export class CrustDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}

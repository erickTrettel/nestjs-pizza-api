import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Filling } from '../entities';

export class CreateIngredientDto {
  @IsString() @IsNotEmpty()
  description: string;

  filling: Filling;
}

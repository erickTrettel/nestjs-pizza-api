import { CreateIngredientDto } from './create-ingredient.dto';

export class CreateFillingDto {
  description: string;
  ingredients: CreateIngredientDto[];
}

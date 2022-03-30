class IngredientDto {
  description: string;
}

export class FillingDto {
  description: string;
  ingredients: IngredientDto[];
}

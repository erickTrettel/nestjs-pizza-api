import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateIngredientDto } from './create-ingredient.dto';

export class CreateFillingDto {
  @IsString() @IsNotEmpty()
  description: string;

  @IsArray() @ArrayMinSize(1) @ValidateNested({ each: true })
  @Type(() => CreateIngredientDto)
  ingredients: CreateIngredientDto[];
}

import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateSizeDto {
  @IsString() @IsNotEmpty()
  description: string;

  @IsInt() @Min(1)
  slices: number;
}

import { IsNotEmpty, IsString } from "class-validator";

export class CreateDoughDto {
  @IsString() @IsNotEmpty()
  description: string;
}

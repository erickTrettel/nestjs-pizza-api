import { IsNotEmpty, IsString } from "class-validator";

export class CreateCrustDto {
  @IsString() @IsNotEmpty()
  description: string;
}

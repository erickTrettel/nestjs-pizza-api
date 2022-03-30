import { CrustDto } from 'src/crusts/dto';
import { DoughDto } from 'src/dough/dto';
import { FillingDto } from 'src/fillings/dto';
import { SizeDto } from 'src/sizes/dto';

export class PizzaDto {
  dough: DoughDto;
  crust: CrustDto;
  filling: FillingDto;
  size: SizeDto;
}

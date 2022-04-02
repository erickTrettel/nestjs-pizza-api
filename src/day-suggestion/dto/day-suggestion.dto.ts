import { Crust } from 'src/crusts/entities';
import { DoughDto } from 'src/dough/dto';
import { FillingDto } from 'src/fillings/dto';
import { SizeDto } from 'src/sizes/dto';

export class PizzaDto {
  dough: DoughDto;
  crust: Crust;
  filling: FillingDto;
  size: SizeDto;
}

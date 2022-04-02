import { Crust } from 'src/crusts/entities';
import { Dough } from 'src/dough/entities';
import { FillingDto } from 'src/fillings/dto';
import { SizeDto } from 'src/sizes/dto';

export class PizzaDto {
  dough: Dough;
  crust: Crust;
  filling: FillingDto;
  size: SizeDto;
}

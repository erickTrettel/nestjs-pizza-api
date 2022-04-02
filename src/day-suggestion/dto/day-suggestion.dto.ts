import { Crust } from 'src/crusts/entities';
import { Dough } from 'src/dough/entities';
import { FillingDto } from 'src/fillings/dto';
import { Size } from 'src/sizes/entities';

export class PizzaDto {
  dough: Dough;
  crust: Crust;
  filling: FillingDto;
  size: Size;
}

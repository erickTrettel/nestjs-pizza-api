import { Crust } from 'src/crusts/entities';
import { Dough } from 'src/dough/entities';
import { Filling } from 'src/fillings/entities';
import { Size } from 'src/sizes/entities';

export class PizzaDto {
  dough: Dough;
  crust: Crust;
  filling: Filling;
  size: Size;
}

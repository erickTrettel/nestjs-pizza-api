import { Injectable } from '@nestjs/common';
import { CrustService } from 'src/crusts/crusts.service';
import { DoughService } from 'src/dough/dough.service';
import { FillingService } from 'src/fillings/fillings.service';
import { SizeService } from 'src/sizes/sizes.service';
import { PizzaDto } from './dto';

@Injectable()
export class DaySuggestionService {
  constructor(
    private doughService: DoughService,
    private sizeService: SizeService,
    private crustService: CrustService,
    private fillingService: FillingService,
  ) {}

  async findByDay(day: number): Promise<PizzaDto> {
    const [dough] = await this.doughService.findAll();
    const sizes = await this.sizeService.findAll();
    const crusts = await this.crustService.findAll();
    const fillings = await this.fillingService.findAll();

    return {
      1: {
        dough,
        crust: crusts[1],
        filling: fillings[2],
        size: sizes[0],
      },
      2: {
        dough,
        crust: crusts[1],
        filling: fillings[3],
        size: sizes[1],
      },
      3: {
        dough,
        crust: crusts[0],
        filling: fillings[1],
        size: sizes[2],
      },
      4: {
        dough,
        crust: crusts[4],
        filling: fillings[3],
        size: sizes[3],
      },
      5: {
        dough,
        crust: crusts[3],
        filling: fillings[0],
        size: sizes[4],
      },
      6: {
        dough,
        crust: crusts[4],
        filling: fillings[1],
        size: sizes[0],
      },
      7: {
        dough,
        crust: crusts[2],
        filling: fillings[2],
        size: sizes[1],
      },
    }[day];
  }
}

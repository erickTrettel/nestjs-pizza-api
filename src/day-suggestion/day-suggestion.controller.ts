import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { DaySuggestionService } from './day-suggestion.service';

@Controller('day_suggestion')
export class DaySuggestionController {
  constructor(private service: DaySuggestionService) {}

  @Get(':day')
  async getByDay(@Param('day') day: number) {
    if (isNaN(day)) throw new BadRequestException('Day must be a number');

    if (day <= 0 || day > 7) throw new BadRequestException('Invalid week day');

    return this.service.findByDay(day);
  }

  @Post(':day')
  async selectByDay(@Param('day') day: number) {
    if (isNaN(day)) throw new BadRequestException('Day must be a number');

    if (day <= 0 || day > 7) throw new BadRequestException('Invalid week day');

    const pizza = await this.service.findByDay(day);

    return {
      pizza,
      message:
        'Parabéns, você recebeu pontos de benefício por ter escolhido a pizza do dia!',
    };
  }
}

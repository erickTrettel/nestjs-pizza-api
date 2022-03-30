import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrustsModule } from './crusts/crusts.module';
import { DoughModule } from './dough/dough.module';
import { FillingsModule } from './fillings/fillings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CrustsModule,
    DoughModule,
    FillingsModule,
  ],
})
export class AppModule {}

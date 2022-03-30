import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrustsModule } from './crusts/crusts.module';
import { DoughModule } from './dough/dough.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CrustsModule,
    DoughModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CrustsModule } from './crusts/crusts.module';
import { DoughModule } from './dough/dough.module';
import { FillingsModule } from './fillings/fillings.module';
import { SizesModule } from './sizes/sizes.module';
import { DaySuggestionModule } from './day-suggestion/day-suggestion.module';

import { CrustDto } from './crusts/dto';
import { SizeDto } from './sizes/dto';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [CrustDto, SizeDto],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    CrustsModule,
    DoughModule,
    FillingsModule,
    SizesModule,
    DaySuggestionModule,
  ],
})
export class AppModule {}

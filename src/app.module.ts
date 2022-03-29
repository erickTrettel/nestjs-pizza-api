import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrustsModule } from './crusts/crusts.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CrustsModule],
})
export class AppModule {}

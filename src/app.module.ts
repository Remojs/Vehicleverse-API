import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModule } from './modules/vehicles-module/vehicles.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [VehicleModule, MongooseModule.forRoot(process.env.MONGO)],
})
export class AppModule {}

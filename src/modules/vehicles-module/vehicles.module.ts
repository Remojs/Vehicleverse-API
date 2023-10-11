import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from 'src/schemas/vehicle.schema';
import { GetByModelService } from './services/getByModel.service';
import { GetByModelController } from './controllers/getByModel.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [GetByModelController],
  providers: [GetByModelService],
})
export class VehicleModule {}

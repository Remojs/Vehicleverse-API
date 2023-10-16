import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from 'src/schemas/vehicle.schema';
import { GetByModelService } from './services/getByModel.service';
import { GetByModelController } from './controllers/getByModel.controller';
import { GetByBrandService } from './services/getByBrand.service';
import { GetByBrandController } from './controllers/getByBrand.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [GetByModelController, GetByBrandController],
  providers: [GetByModelService, GetByBrandService],
})
export class VehicleModule {}

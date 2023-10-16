import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from 'src/schemas/vehicle.schema';
import { Model } from 'mongoose';

@Injectable()
export class GetByBrandService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  async findByBrand(brand: string) {
    try {
      const vehicles = await this.vehicleModel
        .find({ brand_name: brand })
        .exec();
      return vehicles;
    } catch (error) {
      throw new Error(`Error al buscar por modelo: ${error.message}`);
    }
  }
}

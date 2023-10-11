import { Controller, Get, Param } from '@nestjs/common';
import { GetByModelService } from '../services/getByModel.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private vehicleService: GetByModelService) {}

  @Get(':model')
  async findByModel(@Param('model') model: string) {
    try {
      const vehicles = await this.vehicleService.findByModel(model);
      if (!vehicles) {
        return {
          message: 'Ningún auto encontrado para el modelo proporcionado',
        };
      }
      return vehicles;
    } catch (error) {
      return { error: error.message };
    }
  }
}

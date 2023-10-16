import { Controller, Get, Param } from '@nestjs/common';
import { GetByBrandService } from '../services/getByBrand.service';

@Controller('vehicle')
export class GetByBrandController {
  constructor(private vehicleService: GetByBrandService) {}

  @Get(':brand')
  async findByBrand(@Param('brand') brand: string) {
    try {
      const vehicles = await this.vehicleService.findByBrand(brand);
      if (!vehicles) {
        return {
          message: 'Ningúna marca encontrada con el nombre proporcionado',
        };
      }
      return vehicles;
    } catch (error) {
      return { error: error.message };
    }
  }
}

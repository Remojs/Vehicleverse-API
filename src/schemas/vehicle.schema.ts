import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Vehicle {
  @Prop({ required: true })
  brand_ID: number;
  @Prop({ required: true, trim: true })
  brand_name: string;
  @Prop({ required: true })
  cars: object;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

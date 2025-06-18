import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class DeviceComplianceCheck extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Device', required: true })
  deviceId: Types.ObjectId;

  @Prop({ required: true })
  controlId: string;

  @Prop({ required: true })
  status: string; // checked, crossed, skipped, empty

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  checkedBy: Types.ObjectId;

  @Prop({ required: true })
  checkedAt: Date;
}

export const DeviceComplianceCheckSchema = SchemaFactory.createForClass(DeviceComplianceCheck);

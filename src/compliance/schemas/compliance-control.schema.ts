import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class ComplianceControl extends Document {
  @Prop({ required: true })
  controlId: string;

  @Prop({ required: true })
  benchmarkId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  deviceType: string;

  @Prop({ type: Object })
  fullDetails: any;
}

export const ComplianceControlSchema = SchemaFactory.createForClass(ComplianceControl);

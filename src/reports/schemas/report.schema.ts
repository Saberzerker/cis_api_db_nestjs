import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Report extends Document {
  @Prop({ type: Types.ObjectId, ref: 'SavedConfiguration', required: true })
  saveId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Device', required: true })
  deviceId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  generatedAt: Date;

  @Prop()
  fileUrl?: string;

  @Prop({ type: Object })
  metadata?: any;
}

export const ReportSchema = SchemaFactory.createForClass(Report);

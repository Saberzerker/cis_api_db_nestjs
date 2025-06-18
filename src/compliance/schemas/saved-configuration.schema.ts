import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class SavedConfiguration extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Device', required: true })
  deviceId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Array })
  checks: any[];

  @Prop()
  savedAt: Date;

  @Prop()
  comments?: string;
}

export const SavedConfigurationSchema = SchemaFactory.createForClass(SavedConfiguration);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Benchmark extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  dateUpdated: Date;

  @Prop()
  pdfUrl?: string;

  @Prop()
  csvUrl?: string;

  @Prop()
  jsonUrl?: string;

  @Prop({ type: Object })
  metadata?: any;
}

export const BenchmarkSchema = SchemaFactory.createForClass(Benchmark);

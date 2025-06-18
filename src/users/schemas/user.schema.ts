import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole } from '../../common/enums/user-role.enum';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone?: string;

  @Prop({ enum: UserRole, default: UserRole.ADMIN })
  role: UserRole;

  @Prop({ default: Date.now })
  registrationDate: Date;

  @Prop()
  lastLogin?: Date;

  @Prop({ default: 0 })
  savedConfigurationsCount: number;

  @Prop({ default: 0 })
  generatedReportsCount: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

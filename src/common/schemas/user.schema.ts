import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true }) // Ensure to hash before saving
  password: string;

  @Prop()
  googleId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

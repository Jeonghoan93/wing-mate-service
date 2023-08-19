import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class AiImage extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({ required: true })
  originalImage: string[]; // URL or path to the original image

  @Prop({ required: true })
  aiGeneratedImage: string[]; // URL or path to the AI-generated image
}

export const AiImageSchema = SchemaFactory.createForClass(AiImage);

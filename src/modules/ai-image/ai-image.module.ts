import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AiImage, AiImageSchema } from 'src/common/schemas/ai-image.schema';
import { AiImageController } from './ai-image.controller';
import { AiImageService } from './ai-image.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AiImage.name, schema: AiImageSchema }]),
  ],
  providers: [AiImageService],
  controllers: [AiImageController],
})
export class AiImageModule {}

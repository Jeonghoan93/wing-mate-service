import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AiImage } from 'src/common/schemas/ai-image.schema';
import { CreateAiImageDto } from './dto/create-ai-image.dto';

@Injectable()
export class AiImageService {
  constructor(
    @InjectModel('AiImage')
    private readonly aiImageModel: Model<AiImage>,
  ) {}

  async createImage(data: CreateAiImageDto): Promise<AiImage> {
    const createdImage = new this.aiImageModel(data);
    return await createdImage.save();
  }

  async getImageById(id: string): Promise<AiImage> {
    return await this.aiImageModel.findById(id).exec();
  }
}

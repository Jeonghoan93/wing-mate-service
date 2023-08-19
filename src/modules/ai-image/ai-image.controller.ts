import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AiImageService } from './ai-image.service';
import { CreateAiImageDto } from './dto/create-ai-image.dto';

@Controller('ai-image')
export class AiImageController {
  constructor(private readonly aiImageService: AiImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file,
    @Body() createAiImageDto: CreateAiImageDto,
  ) {
    // Assuming the image file will be attached with the name 'image' in the form-data
    createAiImageDto.originalImage = file.path; // or file.url depending on how you're storing it

    const aiImage = await this.aiImageService.createImage(createAiImageDto);
    return aiImage;
  }

  @Get(':id')
  async getAiImage(@Param('id') id: string) {
    return this.aiImageService.getImageById(id);
  }
}

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from './s3.service';

@Controller('api/upload')
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileToS3(@UploadedFile() file: Express.Multer.File) {
    const url = await this.s3Service.uploadFile(file);
    return { url };
  }
}

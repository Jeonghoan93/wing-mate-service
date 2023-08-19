import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from 'src/common/schemas/form.schema';
import { S3Service } from 'src/modules/s3/s3.service';
import { CreateFormDto } from './dto/create-form-dto';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name) private formModel: Model<Form>,
    private readonly s3Service: S3Service,
  ) {}

  async create(
    createFormDto: CreateFormDto,
    files?: Express.Multer.File[],
  ): Promise<Form> {
    try {
      if (files && files.length > 0) {
        const imageUrls = await this.s3Service.uploadFiles(files);

        createFormDto.originalPhotos = imageUrls;
      }

      const formEntry = new this.formModel(createFormDto);
      return formEntry.save();
    } catch (err) {
      throw new Error('Unable to process the form. Please try again.');
    }
  }

  async findAll(): Promise<Form[]> {
    return this.formModel.find().exec();
  }

  // Add other service methods as needed (e.g., findByUserId, update, delete)
}

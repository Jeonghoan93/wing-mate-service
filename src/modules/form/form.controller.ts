import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Form } from 'src/common/schemas/form.schema';
import { CreateFormDto } from './dto/create-form-dto';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('submit')
  @UseInterceptors(FileInterceptor('files'))
  async submitForm(
    @Body() createFormDto: CreateFormDto,
    @UploadedFile() files: Express.Multer.File[],
  ): Promise<Form> {
    return this.formService.create(createFormDto, files);
  }

  @Get('all')
  async findAll(): Promise<Form[]> {
    return this.formService.findAll();
  }

  // You can add more endpoints here as required (e.g., get by userId, update, delete)
}

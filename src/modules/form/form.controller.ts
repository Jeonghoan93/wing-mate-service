import { Body, Controller, Get, Post } from '@nestjs/common';
import { Form } from 'src/common/schemas/form.schema';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('submit')
  async submitForm(@Body() createFormDto: any): Promise<Form> {
    // Remember to use a DTO here
    return this.formService.create(createFormDto);
  }

  @Get('all')
  async findAll(): Promise<Form[]> {
    return this.formService.findAll();
  }

  // You can add more endpoints here as required (e.g., get by userId, update, delete)
}

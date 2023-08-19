import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from 'src/common/schemas/form.schema';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private formModel: Model<Form>) {}

  async create(createFormDto: any): Promise<Form> {
    const formEntry = new this.formModel(createFormDto);
    return formEntry.save();
  }

  async findAll(): Promise<Form[]> {
    return this.formModel.find().exec();
  }

  // Add other service methods as needed (e.g., findByUserId, update, delete)
}

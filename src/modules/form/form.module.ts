import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from 'src/common/schemas/form.schema';
import { S3Module } from '../s3/s3.module';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
    S3Module,
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}

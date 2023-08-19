import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from 'src/common/config/app.config';
import { AiImageModule } from './modules/ai-image/ai-image.module';
import { AuthModule } from './modules/auth/auth.module';
import { FormModule } from './modules/form/form.module';
import { S3Module } from './modules/s3/s3.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.url'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    FormModule,
    AiImageModule,
    S3Module,
  ],
})
export class AppModule {}

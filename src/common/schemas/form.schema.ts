import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {
  CurrentMatchesEnum,
  DatingAppEnum,
  DesiredMatchesEnum,
  InterestedInEnum,
  LookingForEnum,
  MatchQualityEnum,
  MotivationLevelEnum,
  TypicalDayEnum,
} from 'src/common/enums/form.enum';

@Schema({ timestamps: true })
export class Form extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop()
  wantsMoreMatches: boolean;

  @Prop({ enum: ['man', 'woman', 'binary'] })
  gender: string;

  @Prop({ enum: InterestedInEnum, required: true })
  interestedIn: string;

  @Prop({ enum: LookingForEnum })
  lookingFor: string;

  @Prop({ enum: DatingAppEnum })
  datingApp: string;

  @Prop({ enum: TypicalDayEnum, required: true }) // Enum values for typical day
  typicalDay: string;

  @Prop({ enum: CurrentMatchesEnum, required: true }) // Enum values for current matches
  currentMatches: string;

  @Prop({ enum: MatchQualityEnum, required: true }) // Enum values for match quality
  matchQuality: string;

  @Prop()
  happyWithExperience: boolean;

  @Prop({ enum: DesiredMatchesEnum, required: true }) // Enum values for desired matches
  desiredMatches: string;

  @Prop({ enum: MotivationLevelEnum, required: true }) // Enum values for motivation levels
  motivationLevel: string;

  @Prop([String])
  originalPhotos: string[];

  @Prop([String])
  aiPhotos: string[];
}

export const FormSchema = SchemaFactory.createForClass(Form);

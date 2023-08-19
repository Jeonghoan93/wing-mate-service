import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export enum InterestedInEnum {
  MEN = 'men',
  WOMEN = 'women',
  ANYONE = 'anyone',
}

export enum LookingForEnum {
  RELATIONSHIP = 'relationship',
  FUN = 'fun',
  FRIENDSHIP = 'friendship',
  NETWORKING = 'networking',
  CASUAL = 'casual',
}

export enum DatingAppEnum {
  TINDER = 'tinder',
  HINGE = 'hinge',
  BADOOS = 'badoo',
  OKCUPID = 'okcupid',
  COFFEE_MEETS_BAGEL = 'coffee_meets_bagel',
  PLENTY_OF_FISH = 'plenty_of_fish',
}

export enum TypicalDayEnum {
  CASUAL_BROWSING = 'casual_browsing',
  ACTIVE_SWIPING = 'active_swiping',
  MESSAGE_ONLY_MATCHES = 'message_only_matches',
  INFREQUENT_USE = 'infrequent_use',
}

export enum CurrentMatchesEnum {
  NONE = 'none',
  FEW = 'few',
  SOME = 'some',
  MANY = 'many',
  TOO_MANY = 'too_many',
}

export enum MatchQualityEnum {
  POOR = 'poor',
  AVERAGE = 'average',
  GOOD = 'good',
  EXCELLENT = 'excellent',
}

export enum DesiredMatchesEnum {
  SAME_AS_NOW = 'same_as_now',
  MORE = 'more',
  MANY_MORE = 'many_more',
  LESS = 'less',
}

export enum MotivationLevelEnum {
  NOT_MOTIVATED = 'not_motivated',
  SOMEWHAT_MOTIVATED = 'somewhat_motivated',
  MOTIVATED = 'motivated',
  HIGHLY_MOTIVATED = 'highly_motivated',
}

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

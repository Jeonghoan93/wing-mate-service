import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
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

export class CreateFormDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsBoolean()
  wantsMoreMatches: boolean;

  @IsOptional()
  @IsEnum(['man', 'woman', 'binary'])
  gender: string;

  @IsNotEmpty()
  @IsEnum(InterestedInEnum)
  interestedIn: InterestedInEnum;

  @IsOptional()
  @IsEnum(LookingForEnum)
  lookingFor: LookingForEnum;

  @IsOptional()
  @IsEnum(DatingAppEnum)
  datingApp: DatingAppEnum;

  @IsNotEmpty()
  @IsEnum(TypicalDayEnum)
  typicalDay: TypicalDayEnum;

  @IsNotEmpty()
  @IsEnum(CurrentMatchesEnum)
  currentMatches: CurrentMatchesEnum;

  @IsNotEmpty()
  @IsEnum(MatchQualityEnum)
  matchQuality: MatchQualityEnum;

  @IsNotEmpty()
  @IsBoolean()
  happyWithExperience: boolean;

  @IsNotEmpty()
  @IsEnum(DesiredMatchesEnum)
  desiredMatches: DesiredMatchesEnum;

  @IsNotEmpty()
  @IsEnum(MotivationLevelEnum)
  motivationLevel: MotivationLevelEnum;

  @IsArray()
  @IsString({ each: true })
  originalPhotos: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  aiPhotos: string[];
}

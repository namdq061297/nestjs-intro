import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postStatus, postType } from '../enum/post.enum';

// type META = {
//   key: string;
//   value: string;
// };

export class metaOptionDTO {
  @IsString()
  @IsNotEmpty()
  key: string;
  @IsNotEmpty()
  value: any;
}
export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;
  @IsEnum(postType)
  postType: postType;
  @IsString()
  @IsNotEmpty()
  slug: string;
  @IsEnum(postStatus)
  status: postStatus;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsString()
  @IsOptional()
  schema?: string;
  @IsUrl()
  @IsOptional()
  imageUrl?: string;
  @IsISO8601()
  @IsOptional()
  publishDate?: Date;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => metaOptionDTO)
  metaOptions?: metaOptionDTO[];
}

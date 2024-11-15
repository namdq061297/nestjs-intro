import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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

type META = {
  key: string;
  value: string;
};

export class metaOptionDTO {
  @IsString()
  @IsNotEmpty()
  key: string;
  @IsNotEmpty()
  value: any;
}
export class CreatePostDto {
  @ApiProperty({
    description: 'title post',
    example: 'this is titles',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;
  @ApiProperty({
    enum: postType,
  })
  @IsEnum(postType)
  postType: postType;
  @IsString()
  @IsNotEmpty()
  slug: string;
  @ApiProperty({
    enum: postStatus,
  })
  @IsEnum(postStatus)
  status: postStatus;
  @ApiPropertyOptional()
  @IsString()
  @IsNotEmpty()
  content: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  schema?: string;
  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  imageUrl?: string;
  @ApiPropertyOptional()
  @IsISO8601()
  @IsOptional()
  publishDate?: Date;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional()
  tags?: string[];
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'key of item',
        },
        value: {
          type: 'any',
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => metaOptionDTO)
  metaOptions?: metaOptionDTO[];
}

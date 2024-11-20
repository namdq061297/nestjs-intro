import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { postStatus, postType } from '../enum/post.enum';

// type META = {
//   key: string;
//   value: string;
// };

export class metaOptionDTO {
  @IsJSON()
  @IsNotEmpty()
  metaValue: any;
}
export class CreatePostDto {
  @ApiProperty({
    description: 'title post',
    example: 'this is titles',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @IsNotEmpty()
  title: string;
  @ApiProperty({
    enum: postType,
  })
  @IsEnum(postType)
  postType: postType;
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
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
  @MaxLength(30)
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
        metaValue: {
          type: 'json',
          description: 'meta value json string',
          example: '{"test": true}',
        },
      },
    },
  })
  @IsOptional()
  // @ValidateNested({ each: true })
  @Type(() => metaOptionDTO)
  metaOptions?: metaOptionDTO | null;
}

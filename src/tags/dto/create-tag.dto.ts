import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  name: string;
  @ApiProperty()
  @IsString()
  @MaxLength(30)
  slug: string;
  @ApiPropertyOptional()
  @IsString()
  @MaxLength(30)
  schema?: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  imageUrl?: string;
}

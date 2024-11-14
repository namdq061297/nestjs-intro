import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetUserDto {
  @ApiPropertyOptional({
    description: 'get user by id',
    example: 1212,
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id?: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreateMetaOptionDto {
  @ApiProperty()
  @IsJSON()
  @IsNotEmpty()
  metaValue: string;
}

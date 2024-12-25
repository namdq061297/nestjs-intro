import { IntersectionType } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { PaginationnQueryDto } from 'src/common/pagination/dtos/pagination-query.dto';

// type META = {
//   key: string;
//   value: string;
// };

class GetPostBaseDTO {
  @IsDate()
  @IsOptional()
  startDate?: Date;
  @IsDate()
  @IsOptional()
  endDate?: Date;
}

export class GetPostDTO extends IntersectionType(
  GetPostBaseDTO,
  PaginationnQueryDto,
) {}

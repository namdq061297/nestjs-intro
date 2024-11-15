import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}

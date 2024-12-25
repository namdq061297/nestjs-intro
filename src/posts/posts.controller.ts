import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostDTO } from './dto/get-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './providers/posts.service';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiResponse({
    status: 200,
    description: 'successfully',
  })
  @ApiOperation({
    summary: 'create new post',
  })
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query() postQuery: GetPostDTO) {
    return this.postsService.findAll(postQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query() postQuery: GetPostDTO) {
    console.log('postQuery', postQuery);
    return this.postsService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'successfully',
  })
  @ApiOperation({
    summary: 'update new post',
  })
  @Patch()
  update(@Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(updatePostDto);
  }

  @Delete()
  remove(@Query('id', ParseIntPipe) id: string) {
    return this.postsService.remove(+id);
  }

  @Get(':id/:userId')
  findOneByUserId(@Param('userId') userId: string) {
    return this.postsService.findOneByUserId(+userId);
  }
}

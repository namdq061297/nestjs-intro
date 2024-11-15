import { Body, Injectable, Patch } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  create(createPostDto: CreatePostDto) {
    console.log('createPostDto', createPostDto);
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action find #${id} post`;
  }

  @Patch()
  update(@Body() bodyDto: UpdatePostDto) {
    console.log(bodyDto);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  findOneByUserId(userId: number) {
    const user = this.usersService.findOne({ params: { id: userId } });
    console.log('user', user);
    return `This action returns ${user.userId}`;
  }
}

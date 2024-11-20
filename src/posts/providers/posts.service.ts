import { Body, Injectable, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(MetaOption)
    private metatOptionRepository: Repository<MetaOption>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  async create(@Body() createPostDto: CreatePostDto) {
    console.log('createPostDto', createPostDto);
    const metaOption = createPostDto?.metaOptions
      ? this.metatOptionRepository.create(createPostDto?.metaOptions)
      : null;
    console.log(metaOption);
    return;
    if (metaOption) {
      await this.metatOptionRepository.save(metaOption);
    }
    const post = this.postRepository.create(createPostDto);
    if (metaOption) {
      post.metaOptions = metaOption;
    }
    await this.postRepository.save(post);
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

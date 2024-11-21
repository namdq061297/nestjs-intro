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
  ) { }
  async create(@Body() createPostDto: CreatePostDto) {
    // const metaOption = createPostDto?.metaOptions
    //   ? this.metatOptionRepository.create(createPostDto?.metaOptions)
    //   : null;
    // if (metaOption) {
    //   await this.metatOptionRepository.save(metaOption);
    // }
    const post = this.postRepository.create(createPostDto);
    // if (metaOption) {
    //   post.metaOptions = metaOption;
    // }
    await this.postRepository.save(post);
  }

  findAll() {
    return `This action returns all posts`;
  }

  async findOne(id: number) {
    const find = await this.postRepository.findOneBy({ id: id });
    console.log(find);
    const post = await this.postRepository.find({
      relations: {
        // metaOptions: true,
      },
    });
    return post;
  }

  @Patch()
  update(@Body() bodyDto: UpdatePostDto) {
    console.log(bodyDto);
  }

  async remove(id: number) {
    // const post = await this.postRepository.findOneBy({ id: id });
    // if (post.metaOptions) {
    //   await this.postRepository.delete({ id });
    //   await this.metatOptionRepository.delete({ id: post?.metaOptions?.id });
    //   const inversePost = await this.metatOptionRepository.find({
    //     where: { id: post.metaOptions.id },
    //     relations: {
    //       post: true,
    //     },
    //   });
    //   console.log('inversePost', inversePost);
    // }
    await this.postRepository.delete(id);
    return { deleted: true, id };
  }

  async findOneByUserId(userId: number) {
    const user = this.usersService.findOne({ params: { id: userId } });
    return user;
  }
}

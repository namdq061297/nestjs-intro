import { Body, Injectable, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
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
    private readonly tagsService: TagsService,
  ) {}
  async create(@Body() createPostDto: CreatePostDto) {
    // const metaOption = createPostDto?.metaOptions
    //   ? this.metatOptionRepository.create(createPostDto?.metaOptions)
    //   : null;
    // if (metaOption) {
    //   await this.metatOptionRepository.save(metaOption);
    // }
    const findUser = await this.usersService.findOne({
      params: { id: createPostDto?.authorId },
    });
    const findTag = await this.tagsService.findTags(createPostDto?.tags);
    const post = this.postRepository.create({
      ...createPostDto,
      author: findUser,
      tags: findTag,
    });
    // if (metaOption) {
    //   post.metaOptions = metaOption;
    // }
    await this.postRepository.save(post);
  }

  async findAll() {
    const posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
        // tags: true,
        // author: true,
      },
    });
    return posts;
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
  async update(@Body() bodyDto: UpdatePostDto) {
    const findTag = await this.tagsService.findOne(bodyDto.id);
    const findTags = await this.tagsService.findTags(bodyDto.tags);
    const findPost = await this.postRepository.findOneBy({
      id: bodyDto.id,
    });
    findPost.title = bodyDto?.title ?? findPost.title;
    findPost.content = bodyDto?.content ?? findPost.content;
    findPost.status = bodyDto?.status ?? findPost.status;
    findPost.slug = bodyDto?.slug ?? findPost.slug;
    findPost.postType = bodyDto?.postType ?? findPost.postType;
    findPost.imageUrl = bodyDto?.imageUrl ?? findPost.imageUrl;
    findPost.publishDate = bodyDto?.publishDate ?? findPost.publishDate;

    findPost.tags = findTags;

    return await this.postRepository.save(findPost);
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

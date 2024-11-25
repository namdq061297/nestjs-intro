import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/entities/meta-option.entity';
import { TagsModule } from 'src/tags/tags.module';
import { UsersModule } from 'src/users/users.module';
import { Post } from './entities/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Post, MetaOption]),
    TagsModule,
  ],
})
export class PostsModule {}

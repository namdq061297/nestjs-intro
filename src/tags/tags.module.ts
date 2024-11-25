import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { TagsService } from './providers/tags.service';
import { TagsController } from './tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
  imports: [TypeOrmModule.forFeature([Tag])],
})
export class TagsModule {}

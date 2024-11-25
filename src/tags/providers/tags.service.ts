import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tag = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(tag);
  }

  findAll() {
    return `This action returns all tags`;
  }

  async findOne(id: number) {
    const data = await this.tagsRepository.findOneBy({
      id,
    });
    return data;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  async remove(id: number) {
    await this.tagsRepository.delete(id);
    return { deleted: true, id };
  }

  async softRemove(id: number) {
    await this.tagsRepository.softDelete(id);
    return { deleted: true, id };
  }

  async findTags(tags: number[]) {
    const data = await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });
    return data;
  }
}

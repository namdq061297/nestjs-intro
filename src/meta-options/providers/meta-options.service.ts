import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetaOptionDto } from '../dto/create-meta-option.dto';
import { UpdateMetaOptionDto } from '../dto/update-meta-option.dto';
import { MetaOption } from '../entities/meta-option.entity';

@Injectable()
export class MetaOptionsService {
  constructor(
    // @Inject(forwardRef(() => AuthService))
    @InjectRepository(MetaOption)
    private metaRepository: Repository<MetaOption>,
    // private readonly authService: AuthService,
  ) {}
  async create(createMetaOptionDto: CreateMetaOptionDto) {
    const metaOption = this.metaRepository.create(createMetaOptionDto);
    return await this.metaRepository.save(metaOption);
  }

  findAll() {
    return `This action returns all metaOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metaOption`;
  }

  update(id: number, updateMetaOptionDto: UpdateMetaOptionDto) {
    return `This action updates a #${id} metaOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} metaOption`;
  }
}

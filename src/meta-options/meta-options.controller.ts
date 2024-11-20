import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMetaOptionDto } from './dto/create-meta-option.dto';
import { UpdateMetaOptionDto } from './dto/update-meta-option.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
@ApiTags('Meta Options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  create(@Body() createMetaOptionDto: CreateMetaOptionDto) {
    return this.metaOptionsService.create(createMetaOptionDto);
  }

  @Get()
  findAll() {
    return this.metaOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metaOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetaOptionDto: UpdateMetaOptionDto) {
    return this.metaOptionsService.update(+id, updateMetaOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metaOptionsService.remove(+id);
  }
}

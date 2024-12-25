import { Module } from '@nestjs/common';
import { PaginationController } from './pagination.controller';
import { PaginationService } from './providers/pagination.service';

@Module({
  controllers: [PaginationController],
  providers: [PaginationService],
  exports: [PaginationService],
})
export class PaginationModule {}

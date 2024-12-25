import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ObjectLiteral, Repository } from 'typeorm';
import { PaginationnQueryDto } from '../dtos/pagination-query.dto';
import { Paginated } from '../interfaces/paginated.interface';

@Injectable()
export class PaginationService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  async paganateQuery<T extends ObjectLiteral>(
    pagination: PaginationnQueryDto,
    repository: Repository<T>,
  ): Promise<Paginated<T>> {
    const result = await repository.find({
      take: pagination.limit,
      skip: (pagination.page - 1) * pagination.limit,
    });
    const baseUrl =
      this.request.protocol + '://' + this.request.headers.host + '/';
    const newUrl = new URL(this.request.url, baseUrl);
    const total = await repository.count();
    const totalPages = Math.ceil(total / pagination.limit);
    const next =
      pagination.page === totalPages ? pagination.page : pagination.page + 1;
    const previous =
      pagination.page === totalPages ? pagination.page : pagination.page - 1;
    const finalResponse: Paginated<T> = {
      data: result,
      meta: {
        perPage: pagination.limit,
        total,
        current: pagination.page,
        totalPages,
      },
      links: {
        first: `${newUrl.origin}${newUrl.pathname}?limt=${pagination.limit}&page=1`,
        last: `${newUrl.origin}${newUrl.pathname}?limt=${pagination.limit}&page=${totalPages}`,
        next: `${newUrl.origin}${newUrl.pathname}?limt=${pagination.limit}&page=${next}`,
        current: `${newUrl.origin}${newUrl.pathname}?limt=${pagination.limit}&page=${pagination.page}`,
        previous: `${newUrl.origin}${newUrl.pathname}?limt=${pagination.limit}&page=${previous}`,
      },
    };
    return finalResponse;
  }
}

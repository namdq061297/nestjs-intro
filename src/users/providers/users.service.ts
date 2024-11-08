import { Injectable } from '@nestjs/common';
import { GetUserDto } from '../dtos/get-user.dto';

@Injectable()
export class UsersService {
  public findAll() {
    return 'all user';
  }
  public findOne({
    params,
    limit,
    page,
  }: {
    params: GetUserDto;
    limit?: number;
    page?: number;
  }) {
    // console.log('params', params);
    console.log('limit', limit);
    console.log('page', page);
    return {
      userId: params?.id,
    };
  }
}

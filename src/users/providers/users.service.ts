import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/dto/auth.service';
import { GetUserDto } from '../dtos/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll() {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    const data = [
      {
        firstName: 'Do',
        email: 'do@gmail.com',
      },
      {
        firstName: 'Nam',
        email: 'nam@gmail.com',
      },
    ];
    return data;
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

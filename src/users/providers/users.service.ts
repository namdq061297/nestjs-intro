import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { GetUserDto } from '../dtos/get-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    // @Inject(forwardRef(() => AuthService))
    @InjectRepository(User)
    private userRepository: Repository<User>,
    // private readonly authService: AuthService,
  ) {}
  public findAll() {
    // const isAuth = this.authService.isAuth();
    // console.log(isAuth);
    // const data = [
    //   {
    //     firstName: 'Do',
    //     email: 'do@gmail.com',
    //   },
    //   {
    //     firstName: 'Nam',
    //     email: 'nam@gmail.com',
    //   },
    // ];
    // return data;
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

  public async createUser(dto: CreateUserDto) {
    const existedUSer = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    const newUser = this.userRepository.create(dto);
    console.log('newUser', newUser);
    return await this.userRepository.save(newUser);
  }
}

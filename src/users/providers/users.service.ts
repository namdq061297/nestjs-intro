import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import profileConfig from '../config/profile.config';
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
    private readonly configService: ConfigService,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
  ) {}
  public findAll() {
    const env = this.configService.get('S3_BUCKET');
    console.log(env);
    console.log(this.profileConfiguration);
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
  public async findOne({
    params,
    limit,
    page,
  }: {
    params: GetUserDto;
    limit?: number;
    page?: number;
  }) {
    const find = await this.userRepository.findOneBy({ id: params.id });
    console.log(find);
    return find;
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

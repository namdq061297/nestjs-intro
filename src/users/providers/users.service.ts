/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadGatewayException,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import profileConfig from '../config/profile.config';
import { CreateManyUserDto } from '../dtos/create-many-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { GetUserDto } from '../dtos/get-user.dto';
import { User } from '../entities/user.entity';
import { UserCreateManyProvider } from './user-create-many.provider';

@Injectable()
export class UsersService {
  constructor(
    // @Inject(forwardRef(() => AuthService))
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private dataSource: DataSource,
    // private readonly authService: AuthService,
    private readonly configService: ConfigService,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
    private readonly userCreateManyProvider: UserCreateManyProvider,
  ) {}
  public async findAll() {
    // const env = this.configService.get('S3_BUCKET');
    // console.log(env);
    // console.log(this.profileConfiguration);
    const users = await this.userRepository.find({
      relations: {},
      order: {
        id: 'ASC',
      },
    });
    return users;
    // throw new HttpException('error find user', HttpStatus.BAD_GATEWAY, {
    //   cause: new Error('Cause Error'),
    //   description: 'api has benn removed',
    // });
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
    let user;
    try {
      user = await this.userRepository.findOneBy({ id: params.id });
    } catch (error) {
      throw new RequestTimeoutException('unable to process request', {
        description: 'error connect to db',
      });
    }
    if (!user) {
      throw new BadGatewayException('user not exist');
    }
    return user;
  }

  public async createUser(dto: CreateUserDto) {
    let existedUser;
    try {
      existedUser = await this.userRepository.findOne({
        where: {
          email: dto.email,
        },
      });
    } catch (error) {
      throw new RequestTimeoutException('unable to process request', {
        description: 'error connect to db',
      });
    }
    if (existedUser) {
      throw new BadGatewayException('user already exist');
    }
    let newUser = this.userRepository.create(dto);
    console.log('newUser', newUser);
    try {
      newUser = await this.userRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException('unable to process request', {
        description: 'error connect to db',
      });
    }
  }
  async createMany(createUserDto: CreateManyUserDto) {
    return await this.userCreateManyProvider.createMany(createUserDto);
  }
}

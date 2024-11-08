import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  public getUser(
    @Param() params: GetUserDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number | undefined,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number | undefined,
  ) {
    return this.usersService.findOne({ params, limit, page });
  }

  @Post()
  public createUser(
    @Body() body: CreateUserDto,
    // @Headers() header,
    // @Ip() ip,
  ) {
    console.log('body', body instanceof CreateUserDto);
    return 'create user';
  }

  @Patch()
  public patchUser(@Body() body: PatchUserDto) {
    console.log('body', body);
    return 'patch user';
  }
}

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'users';
  }

  @Get('/:id')
  public getUser(
    @Param('id', ParseIntPipe) params: string | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: string | undefined,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: string | undefined,
  ) {
    const id = params;
    console.log(typeof id);
    console.log(typeof limit);
    console.log(typeof page);
    return 'user' + params;
  }

  @Post()
  public createUser(
    @Body() body: CreateUserDto,
    // @Headers() header,
    // @Ip() ip,
  ) {
    console.log('body', body);
    return 'create user';
  }
}

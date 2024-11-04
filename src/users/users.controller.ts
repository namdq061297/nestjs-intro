import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'users';
  }

  @Post()
  public createUser() {
    return 'create user';
  }
}

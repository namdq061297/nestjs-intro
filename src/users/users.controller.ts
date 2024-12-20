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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUserDto } from './dtos/create-many-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'fetch user',
  })
  @ApiResponse({
    status: 200,
    description: 'fetch user success',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'number query return',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'the position',
    example: 1,
  })
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
    console.log('createUser', body);
    return this.usersService.createUser(body);
  }

  @Post('create-many')
  public createManyUser(@Body() body: CreateManyUserDto) {
    console.log('createManyUser', body);
    return this.usersService.createMany(body);
  }

  @Patch()
  public patchUser(@Body() body: PatchUserDto) {
    console.log('patchUser', body);
    return 'patch user';
  }
}

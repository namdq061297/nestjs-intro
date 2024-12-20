import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import profileConfig from './config/profile.config';
import { User } from './entities/user.entity';
import { UserCreateManyProvider } from './providers/user-create-many.provider';
import { UsersService } from './providers/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(profileConfig),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserCreateManyProvider],
  exports: [UsersService],
})
export class UsersModule {}

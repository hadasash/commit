import { Controller, Post,Get, Body,Param, ValidationPipe,NotFoundException } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../users.dto';
import { UserEntity } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.registerUser(createUserDto);
  }
  @Get(':id')
async getUserById(@Param('id') id: string): Promise<UserEntity> {
  try {
    console.log('Requested user ID:', id);
    const user = await this.userService.getUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw new NotFoundException('User not found');
  }
}

}

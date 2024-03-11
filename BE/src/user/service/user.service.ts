import { Injectable, BadRequestException ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../users.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity.name) private readonly userModel: Model<UserEntity>) {}

  async registerUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    console.log('Received registration request:', createUserDto);
    if (createUserDto.password !== createUserDto.confirmPassword) {
      console.error('Passwords do not match:', createUserDto);
      throw new BadRequestException('Passwords do not match');
    }
    const createdUser = new this.userModel({
      username: createUserDto.username,
      phoneNumber: createUserDto.phoneNumber,
      password: createUserDto.password,
    });
  
    return createdUser.save();
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async getUserById(id: string): Promise<UserEntity | null> {
    try {
      const user = await this.userModel.findById(id).exec();
      return user;
    } catch (error) {
      console.error('Error getting user by ID from database:', error);
      throw new NotFoundException('User not found');
    }
  }

}
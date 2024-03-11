import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserEntity, UserSchema } from './entity/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot(  `mongodb+srv://dbUser:kNK8X3X0rrdukBrY@cluster0.mfgyalh.mongodb.net/commit`,
    
    {
    }),
    
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

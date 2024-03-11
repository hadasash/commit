import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserEntity extends Document {
  @Prop()
  username!: string;

  @Prop()
  phoneNumber!: string;

  @Prop()
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
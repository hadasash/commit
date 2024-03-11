import { IsString, MinLength, MaxLength, Matches, Equals } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  username!: string;

  @IsString({ message: 'Invalid phone number' })
  @Matches(/^\d{9,10}$/, { message: 'Phone number must be 9 or 10 digits long' })
  phoneNumber!: string;


  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(12, { message: 'Password cannot be longer than 12 characters' })
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,12}$/, { message: 'Password does not meet requirements' })
  password!: string;

  @IsString()
  // Commented out the Equals decorator to disable password matching validation
  // @Equals('password', { message: 'Passwords do not match' })
  confirmPassword!: string;
}

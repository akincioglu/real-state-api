import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The email of the user', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user', required: true })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'The phone of the user' })
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  role: string;
}

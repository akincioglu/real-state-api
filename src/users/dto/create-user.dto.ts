import { IsEmail, IsNotEmpty, IsPhoneNumber, IsEnum } from 'class-validator';
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

  @ApiProperty({ description: 'The role of the user' })
  @IsEnum(['admin', 'agency'])
  role: 'admin' | 'agency';
}

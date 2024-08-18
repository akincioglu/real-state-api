import { IsEmail, IsNotEmpty, IsPhoneNumber, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', example: 'password123' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'User phone number', example: '+1234567890' })
  @IsPhoneNumber(null)
  phone: string;

  @ApiProperty({
    description: 'User role',
    enum: ['admin', 'agency'],
    example: 'admin',
  })
  @IsEnum(['admin', 'agency'])
  role: 'admin' | 'agency';
}

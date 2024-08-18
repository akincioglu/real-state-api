import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty({ description: 'Name of the property', example: 'Luxury Villa' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Type of the property', example: 'villa' })
  @IsNotEmpty()
  type: string;
}

import { IsNotEmpty } from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string; // Emlak tipi (villa, apartman vb.)
}

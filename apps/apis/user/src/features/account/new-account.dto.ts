import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class NewAccountDto {
  @IsString()
  // @IsEmail()
  // @IsNotEmpty()
  email: string;

  @IsString()
  // @IsNotEmpty()
  // @Length(8, 256)
  password: string;

  @IsString()
  // @IsOptional()
  name?: string;
}

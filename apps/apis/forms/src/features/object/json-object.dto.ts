import { IsJSON, IsNotEmpty, IsUUID } from 'class-validator';

export class JsonObjectDto {
  @IsJSON()
  @IsNotEmpty()
  object: unknown;

  @IsUUID(4)
  userId: string;
}

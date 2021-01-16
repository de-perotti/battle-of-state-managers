import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JsonObjectDto } from './json-object.dto';

@Controller('objects')
export class ObjectController {
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() obj: JsonObjectDto): Promise<JsonObjectDto> {
    return obj;
  }
}

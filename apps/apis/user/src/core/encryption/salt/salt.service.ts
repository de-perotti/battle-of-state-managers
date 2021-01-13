import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt';
import { SaltConfiguration } from './saltConfiguration';

@Injectable()
export class SaltService {
  rounds: SaltConfiguration['rounds'];

  constructor(private readonly configService: ConfigService) {
    this.rounds = configService.get<SaltConfiguration['rounds']>(
      'salt.rounds',
      10
    );
  }

  async compare(str: string, hash: string): Promise<boolean> {
    return bcrypt.compare(str, hash);
  }

  async salt(str: string): Promise<string> {
    return bcrypt.hash(str, this.rounds);
  }
}

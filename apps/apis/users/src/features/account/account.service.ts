import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountInteractor } from './account.interactor';
import { User } from '../../core/database/sources/api/entities/user.entity';

@Injectable()
export class AccountService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly accountInteractor: AccountInteractor
  ) {}

  async validate(email: string, password: string): Promise<User | null> {
    return await this.accountInteractor.validateCredentials(email, password);
  }
}

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountInteractor } from './account.interactor';

@Injectable()
export class AccountInterceptor implements NestInterceptor {
  constructor(private readonly accountInteractor: AccountInteractor) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>
  ): Promise<Observable<unknown>> {
    const req = context
      .switchToHttp()
      .getRequest<{ user?: { email?: string } }>();
    const email = req.user && req.user.email;
    if (!email) {
      throw new UnauthorizedException('no user information found');
    }

    await this.accountInteractor.init({ email });

    return next.handle();
  }
}

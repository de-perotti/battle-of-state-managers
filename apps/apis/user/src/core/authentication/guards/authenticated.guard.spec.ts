import { AuthenticatedGuard } from './authenticated.guard';

describe('AuthenticationGuard', () => {
  it('should be defined', () => {
    expect(new AuthenticatedGuard()).toBeDefined();
  });
});

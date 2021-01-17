export class PageDashboard {}
export class PageSignUp {}
export class PageLogin {}
export class ApiAccountCreation {}
export class ApiSignIn {}

export const urls = new Map<unknown, string>([
  [PageDashboard, '/dashboard'],
  [PageSignUp, '/signup'],
  [PageLogin, '/login'],
  [ApiAccountCreation, '/apis/users/accounts'],
  [ApiSignIn, '/apis/users/auth/login'],
]);

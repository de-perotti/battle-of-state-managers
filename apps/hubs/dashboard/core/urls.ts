export class PageDashboard {}
export class PageSignUp {}
export class PageLogin {}
export class PageFormAddress {}
export class PageFormPersonal {}
export class ApiAccountCreation {}
export class ApiSignIn {}

export const urls = new Map<unknown, string>([
  [PageDashboard, '/dashboard'],
  [PageSignUp, '/signup'],
  [PageLogin, '/login'],
  [PageFormAddress, '/forms/address'],
  [PageFormPersonal, '/forms/personal'],
  [ApiAccountCreation, '/apis/users/accounts'],
  [ApiSignIn, '/apis/users/auth/login'],
]);

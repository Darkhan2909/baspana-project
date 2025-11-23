export interface IAuthService {
  login(): string;
  logout(): string;
  isLoggedIn(): boolean;
}
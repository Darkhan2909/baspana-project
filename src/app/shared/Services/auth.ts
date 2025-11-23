// real-auth.service.ts
import { Injectable, signal } from '@angular/core';
import { IAuthService } from '../interfaces/auth';

@Injectable({
    providedIn: 'root'
})
export class RealAuthService implements IAuthService {
  private loggedIn = signal(false);
  logout(): string {
    this.loggedIn.set(false);
    return '👋 Вы вышли из системы';
    // throw new Error('Method not implemented.');
  }
  login(): string {
    this.loggedIn.set(true);
    return '🚀 Настоящий вход выполнен!';
  }
  isLoggedIn(): boolean {
    return this.loggedIn();
    // throw new Error('Method not implemented.');
  }
}

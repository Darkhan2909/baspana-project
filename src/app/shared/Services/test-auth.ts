// fake-auth.service.ts
import { Injectable } from '@angular/core';
import { IAuthService } from '../interfaces/auth';

@Injectable({
    providedIn: 'root'
})
export class FakeAuthService implements IAuthService {
  logout(): string {
    throw new Error('Method not implemented.');
  }
  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  login(): string {
    return '🔧 Это фейковый логин (тест)';
  }
}

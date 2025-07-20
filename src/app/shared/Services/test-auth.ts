// fake-auth.service.ts
import { Injectable } from '@angular/core';
import { IAuthService } from '../interfaces/auth';

@Injectable({
    providedIn: 'root'
})
export class FakeAuthService implements IAuthService {
  login(): string {
    return '🔧 Это фейковый логин (тест)';
  }
}

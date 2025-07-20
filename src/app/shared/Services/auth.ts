// real-auth.service.ts
import { Injectable } from '@angular/core';
import { IAuthService } from '../interfaces/auth';

@Injectable({
    providedIn: 'root'
})
export class RealAuthService implements IAuthService {
  login(): string {
    return '🚀 Настоящий вход выполнен!';
  }
}

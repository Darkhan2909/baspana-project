import { NgClass } from '@angular/common';
import { Component,Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HoverDirective } from '../../shared/directives/hover.directive';
import { InjectionToken } from '@angular/core';
import { IAuthService } from '../../shared/interfaces/auth';
import { RealAuthService } from '../../shared/Services/auth';
import { FakeAuthService } from '../../shared/Services/test-auth';

export const AUTH_SERVICE_TOKEN = new InjectionToken<IAuthService>('AUTH_SERVICE_TOKEN');

@Component({
  selector: 'app-header',
  imports: [RouterLink,HoverDirective],
  standalone: true,
  providers: [{provide: AUTH_SERVICE_TOKEN, useClass: RealAuthService}], // Используйте FakeAuthService для тестирования
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  booleanlogin = false;
  message = '';
  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: IAuthService) {}
  onLogin() {
    // Здесь можно вызвать сервис аутентификации
    this.message = this.authService.login();
    this.booleanlogin = true;
    console.log(this.message);
    alert(this.message);
    // Дополнительная логика после входа
  }
}

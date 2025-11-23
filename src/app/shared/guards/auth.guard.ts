import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { RealAuthService } from '../Services/auth';

export const AuthGuard: CanMatchFn = () => {
  const auth = inject(RealAuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    alert('✅ Доступ разрешён. Добро пожаловать!');  
    // router.parseUrl('/app-programms');
    return true;
  } 
  else {
    alert('⛔ Доступ запрещён. Пожалуйста, войдите.');
    // alert(auth.isLoggedIn());
    router.parseUrl('/');
    return false;
  }
};

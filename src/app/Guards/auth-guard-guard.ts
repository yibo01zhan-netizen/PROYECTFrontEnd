import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
const authService = inject(AuthService);
const navigator = inject(Router);

if(authService.IsLoggedIn()){
  return true;
}

return navigator.navigate(['/login']);

};

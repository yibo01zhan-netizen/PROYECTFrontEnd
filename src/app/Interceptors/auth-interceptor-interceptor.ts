import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../Services/auth-service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
const authService = inject(AuthService);
const token = authService.GetToken();
if (token) {
  req = req.clone({
  setHeaders: {
    Authorization: `Bearer ${token}`
}
});
}
return next(req);
};

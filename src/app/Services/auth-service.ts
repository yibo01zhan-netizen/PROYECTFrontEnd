import { HttpClient } from '@angular/common/http';
import { inject, PLATFORM_ID, Injectable } from '@angular/core'; // 1. Cambiamos Service por Injectable
import { environment } from '../../environments/environment.development';
import { LoginModel } from '../Models/Login';
import { User } from '../Models/User';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root' // 2. Indicamos que está disponible globalmente
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private urlBase: string = environment.apiUrl;

  Login(model: LoginModel) {
    return this.httpClient.post<string>(this.urlBase + 'Auth/Login', model, { responseType: 'text' as 'json' });
  }

  Register(model: User) {
    return this.httpClient.post(this.urlBase + 'Auth/Register', model, { responseType: 'text' as 'json' });
  }

  IsLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return !!localStorage.getItem('token');
  }

  GetToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    return localStorage.getItem('token');
  }

  Logout(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    localStorage.removeItem('token');
  }
}
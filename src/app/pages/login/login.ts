import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { LoginModel } from '../../Models/Login';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
private authService = inject(AuthService);
private navigator = inject(Router);
public loginModel : LoginModel = { email: '', password: ''};

LoginAction(){
this.authService.Login(this.loginModel).subscribe({
next:(response)=>{
  console.log('respuesta', response)
localStorage.setItem(
'token',
response
);
this.navigator.navigate(['/home']);
},error(err) {
console.error('Error:', err);
alert(err.error ?? 'Credenciales incorrectas');
}
})
}

}

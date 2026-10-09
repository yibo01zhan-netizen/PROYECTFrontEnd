import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { User } from '../../Models/User';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
private authService = inject(AuthService);
private navigator = inject(Router);
public RegisterModel : User = { nombre: '', email: '', password: ''};


Register(){
this.authService.Register(this.RegisterModel).subscribe({
next:()=>{
this.navigator.navigate(['/login']);
},error(err) {
console.error('Error completo:', err);
}
})
}


}

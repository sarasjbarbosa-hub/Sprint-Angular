import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   usuarioData = {
    email: '',
    senha: ''
   };

  constructor(private router: Router) {}

  aoSubmeter(): void {
    const { email, senha } = this.usuarioData;

    console.log('Botão clicado! Dados:', this.usuarioData);

    if (email && senha) {
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
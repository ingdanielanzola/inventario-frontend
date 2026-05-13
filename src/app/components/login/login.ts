import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router, 
    private cd: ChangeDetectorRef) {}

  login(): void {
  this.authService.login(this.username, this.password).subscribe({
    next: (response) => {
      this.authService.guardarToken(response.token);
      this.cd.detectChanges();
      this.router.navigate(['/productos']);
    },
    error: () => {
      this.error = 'Usuario o contraseña incorrectos';
      this.cd.detectChanges();
    }
  });
}
}
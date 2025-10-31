import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMethod: 'password' | 'google' = 'password';
  email = '';
  password = '';

  onLogin() {
    console.log('Login with Email:', this.email);
    alert('Logged in successfully!');
  }

  onGoogleLogin() {
    alert('Google login clicked!');
  }
}

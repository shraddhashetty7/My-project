import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

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

  // 🔹 Regular login
  onLogin(form: NgForm) {
    if (form.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    console.log('Login with Email:', this.email);
    alert('Logged in successfully!');
  }

  // 🔹 Google login
  onGoogleLogin() {
    console.log('Google Login Clicked');
    alert('Google login clicked!');
  }
}

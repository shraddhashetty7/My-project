import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  profileOptions = ['Self', 'Son', 'Daughter', 'Brother', 'Sister'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      profileFor: ['']
    });
  }

  onContinue() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.router.navigate(['/next-step']);
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  profileOptions = ['Self', 'Son', 'Daughter', 'Relative', 'Friend','agent'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      profileFor: ['', Validators.required]
    });
  }

  onContinue() {
    if (this.registerForm.valid) {
      const selected = this.registerForm.value.profileFor;
      console.log('Selected profile:', selected);

      // ✅ Navigate directly to NextStep page
      this.router.navigate(['/next-step']);
    } else {
      alert('Please select an option before continuing.');
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.css']
})
export class NextStepComponent {
  nextStepForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nextStepForm = this.fb.group({
      fullName: [''],
      dob: [''],
      gender: ['']
    });
  }

  onContinue() {
    if (this.nextStepForm.valid) {
      console.log(this.nextStepForm.value);
    }
  }
}

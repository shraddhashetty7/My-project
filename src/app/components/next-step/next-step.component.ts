import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.css']
})
export class NextStepComponent {
form: any;
  constructor(private router: Router) {}

  // --- Dropdown / Radio Data ---
  currencies: string[] = ['INR', 'USD', 'EUR', 'GBP', 'AUD'];

  educationLevels: string[] = [
    'Bachelors in Engineering',
    'M.tech',
    'Doctor',
    'Lawyer',
    'PhD',
    'Diploma',
    'Degree',
    'Other'
  ];

  occupations: string[] = [
    'Software Engineer',
    'Doctor',
    'Teacher / Professor',
    'Lawyer',
    'Business',
    'Government Job',
    'Banking / Finance',
    'Healthcare Professional',
    'Freelancer',
    'Small business',
    'Mid-level business',
    'Large business',
    'Other'
  ];

  // --- Model for Form Data ---
  model = {
    occupation: '',
    designation: '',
    organization: '',
    totalExperience: 0,
    relevantExperience: 0,
    annualIncome: 0,
    currency: 'INR',
    incomeType: '',
    education: '',
    educationDetail: '',
    caste: '',            // ✅ Added caste field
    otherCaste: '' ,        // ✅ Added otherCaste for text box
    workLocation: ''  // ✅ Added new property
  };

  // --- Track 'Other' caste selection ---
  isOtherCasteSelected = false;

  onCasteChange(selected: string) {
    this.isOtherCasteSelected = selected === 'Other';
    if (!this.isOtherCasteSelected) {
      this.model.otherCaste = ''; // clear when switching back
    }
  }

  // --- Save & Continue → Education & Career ---
  goToEducationCareer(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control: any) =>
        control.markAsTouched()
      );
      return;
    }

    console.log('Saved details:', this.model);
    this.router.navigate(['/education-career']);
  }

  goBack() {
    this.router.navigate(['/personal-details']);
  }
}

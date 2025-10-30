import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-career',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education-career.component.html',
  styleUrls: ['./education-career.component.css']
})
export class EducationCareerComponent {

  constructor(private router: Router) {}

  // Dropdown arrays
  currencies: string[] = ['INR', 'USD', 'EUR', 'GBP', 'AUD'];

  educationLevels: string[] = [
    'Bachelors in Engineering',
    'M.Tech',
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
  'Government Job',
  'Banking / Finance',
  'Healthcare Professional',
  'Freelancer',
  'Small business',
  'Mid-level business',
  'Large business',
  'Other'
];


  // 🧠 Model (Form Data)
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

    // ✅ Business section
    businessLevel: '',
    businessName: '',
    businessType: '',
    businessDesignations: '',
    businessIncome: ''
  };

  // 🌟 UI Control Flag
  isBusinessSelected: boolean = false;

  // 🔁 When occupation changes
  onOccupationChange(occupation: string) {
    // If any of the 3 business types is selected, show business details section
    const businessOptions = ['Small business', 'Mid-level business', 'Large business'];
    this.isBusinessSelected = businessOptions.includes(occupation);
  }

  // 💾 Save & Continue
  saveAndContinue() {
    console.log('Saved Education & Career Details:', this.model);
    this.router.navigate(['/family-information']);
  }

  // ⬅️ Go Back
  goBack() {
    this.router.navigate(['/next-step']);
  }
}

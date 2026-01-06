import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationCareerService } from '../../services/education-career.service';

@Component({
  selector: 'app-education-career',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education-career.component.html',
  styleUrls: ['./education-career.component.css']
})
export class EducationCareerComponent {

  constructor(
    private router: Router,
    private eduService: EducationCareerService
  ) {}

  // Dropdown arrays
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

  // 🧠 FORM MODEL (MATCHES BACKEND 1:1)
  model = {
    userId: 15, // 🔴 TEMP: replace with logged-in user later

    educationLevel: '',
    educationDetails: '',

    designation: '',
    organization: '',

    totalExperience: null as number | null,
    relevantExperience: null as number | null,
    annualIncome: null as number | null,

    jobLocation: '',

    businessName: '',
    businessType: '',
    keyDesignation: ''
  };

  // UI flag
  isBusinessSelected = false;

  onOccupationChange(occupation: string) {
    const businessOptions = ['Small business', 'Mid-level business', 'Large business'];
    this.isBusinessSelected = businessOptions.includes(occupation);
  }

  // 💾 SAVE
  saveAndContinue() {

    console.log('✅ Sending payload:', this.model);

    this.eduService.create(this.model).subscribe({
      next: res => {
        console.log('✅ API Response:', res);
        alert('Education & Career saved successfully!');
        this.router.navigate(['/family-information']);
      },
      error: err => {
        console.error('❌ API Error:', err.error);
        console.error('❌ Validation:', err.error?.errors);
        alert('Failed to save Education & Career');
      }
    });
  }

  goBack() {
    this.router.navigate(['/next-step']);
  }
}

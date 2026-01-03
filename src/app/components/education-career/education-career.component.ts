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

  /* ===================== DROPDOWNS ===================== */

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

  /* ===================== FORM MODEL ===================== */
  model = {
    userId: 14, // TODO: Replace with logged-in userId

    // Occupation
    occupation: '',

    // Job Details
    designation: '',
    organization: '',
    totalExperience: null as number | null,
    relevantExperience: null as number | null,
    annualIncome: null as number | null,
    jobLocation: '',

    // Business Details
    businessName: '',
    businessType: '',
    businessDesignations: '',
    businessIncome: null as number | null,

    // Education
    educationLevel: '',
    educationDetails: ''
  };

  /* ===================== UI FLAGS ===================== */
  isBusinessSelected = false;

  onOccupationChange(occupation: string): void {
    const businessOptions = [
      'Small business',
      'Mid-level business',
      'Large business'
    ];

    this.isBusinessSelected = businessOptions.includes(occupation);

    // Optional cleanup when switching
    if (!this.isBusinessSelected) {
      this.model.businessName = '';
      this.model.businessType = '';
      this.model.businessDesignations = '';
      this.model.businessIncome = null;
    }
  }

  /* ===================== SAVE ===================== */
  saveAndContinue(): void {
    console.log('✅ Sending payload:', this.model);

    this.eduService.create(this.model).subscribe({
      next: (res) => {
        console.log('✅ API Response:', res);
        alert('Education & Career saved successfully!');
        this.router.navigate(['/family-information']);
      },
      error: (err) => {
        console.error('❌ API Error:', err);
        console.error('❌ Validation Errors:', err?.error?.errors);
        alert('Failed to save Education & Career');
      }
    });
  }

  /* ===================== NAVIGATION ===================== */
  goBack(): void {
    this.router.navigate(['/next-step']);
  }
}

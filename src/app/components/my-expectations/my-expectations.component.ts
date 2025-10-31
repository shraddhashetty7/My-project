import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-my-expectations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-expectations.component.html',
  styleUrls: ['./my-expectations.component.css']
})
export class MyExpectationsComponent {

  constructor(private router: Router) {} // ✅ Proper dependency injection

  maritalStatusOptions: string[] = [
    'Single',
    'Married',
    'Divorced',
    'Widow / Widower'
  ];

  // 🌍 Multi-select Regions
  selectedRegions: string[] = [];
  regionOptions: string[] = [
    'Udupi',
    'Kundapura',
    'Mangalore',
    'Bangalore',
    'Other parts of Karnataka',
    'Mumbai',
    'Pune',
    'Goa',
    'Other states of India',
    'Gulf Countries (UAE, Qatar, Oman, etc.)',
    'Europe Countries',
    'USA / Canada',
    'Australia / New Zealand',
    'Other Foreign Countries'
  ];

  // 🎓 Multi-select Professions
  selectedProfessions: string[] = [];
  professionOptions: string[] = [
    'Engineer',
    'Doctor',
    'Teacher / Professor',
    'Medical Sector',
    'Business',
    'Lawyer',
    'Artist',
    'Government Employee',
    'Private Sector Employee',
    'IT / Software Professional',
    'Banking / Finance Professional',
    'Chartered Accountant / Auditor',
    'Architect',
    'Civil Services (IAS / IPS / IFS)',
    'Defence Services',
    'Scientist / Researcher',
    'Pharmacist',
    'Fashion Designer',
    'Journalist / Writer',
    'Social Worker / NGO',
    'Agriculture / Farming',
    'Self-Employed / Freelancer',
    'Student',
    'Not Working',
    'Other'
  ];

  // 🧍 Age + Salary range fields
  ageFrom: string = '';
  ageTo: string = '';
  salaryFrom: string = '';
  salaryTo: string = '';

  // 💍 Other selected values
  selectedMaritalStatus: string = '';
  opinion: string = '';

  // ✅ Submit handler
  onSubmit() {
    console.log('Expectations submitted:', {
      ageRange: `${this.ageFrom} - ${this.ageTo}`,
      salaryRange: `${this.salaryFrom} - ${this.salaryTo}`,
      maritalStatus: this.selectedMaritalStatus,
      regions: this.selectedRegions,
      professions: this.selectedProfessions,
      opinion: this.opinion
    });

    alert('Expectations submitted successfully!');
  }

  // ✅ Navigate to Upload Photos
  goToUploadPhotos() {
    this.router.navigate(['/upload-photos']);
  }

  // ✅ Back navigation
  goBack() {
    this.router.navigate(['/astrological-information']);
  }

  // ✅ Save & Continue logic (optional)
  saveAndContinue() {
    this.router.navigate(['/upload-photos']);
  }
}

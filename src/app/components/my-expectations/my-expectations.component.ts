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

  opinion: string = '';

  maritalStatusOptions: string[] = [
    'Single',
    'Married',
    'Divorced',
    'Widow / Widower'
  ];


  // 🗣️ Expected Languages Known
expectedLanguages: string[] = []; // To store selected languages
languageOptions: string[] = [
  'Kannada',
  'Tulu',
  'Kundapura Kannada',
  'English',
  'Hindi'
];

// ✅ Toggle a language on/off
toggleLanguage(language: string) {
  const index = this.expectedLanguages.indexOf(language);
  if (index === -1) {
    this.expectedLanguages.push(language); // Add
  } else {
    this.expectedLanguages.splice(index, 1); // Remove
  }
}

// ✅ Check if a language is already selected
isLanguageSelected(language: string): boolean {
  return this.expectedLanguages.includes(language);
}

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

// ✅ Toggle Region
toggleRegion(region: string) {
  const index = this.selectedRegions.indexOf(region);
  if (index === -1) {
    this.selectedRegions.push(region);
  } else {
    this.selectedRegions.splice(index, 1);
  }
}

// ✅ Check if region is selected
isRegionSelected(region: string): boolean {
  return this.selectedRegions.includes(region);
}

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
  // ✅ Toggle Profession
toggleProfession(profession: string) {
  const index = this.selectedProfessions.indexOf(profession);
  if (index === -1) {
    this.selectedProfessions.push(profession);
  } else {
    this.selectedProfessions.splice(index, 1);
  }
}

// ✅ Check if Profession is selected
isProfessionSelected(profession: string): boolean {
  return this.selectedProfessions.includes(profession);
}


  // 🧍 Age + Salary range fields
  ageFrom: string = '';
  ageTo: string = '';
  salaryFrom: string = '';
  salaryTo: string = '';

  

// To store selected statuses
selectedMaritalStatus: string[] = [];

// ✅ Toggle a marital status on/off
toggleMaritalStatus(status: string) {
  const index = this.selectedMaritalStatus.indexOf(status);
  if (index === -1) {
    this.selectedMaritalStatus.push(status); // Add
  } else {
    this.selectedMaritalStatus.splice(index, 1); // Remove
  }
}

// ✅ Check if a status is already selected
isMaritalStatusSelected(status: string): boolean {
  return this.selectedMaritalStatus.includes(status);
}
heightFrom: string = '';
heightTo: string = '';
casteOptions: string[] = ['Bunt', 'Billava', 'Other', 'Any Caste'];
selectedCaste: string = '';
heightOptions: string[] = [
  '5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '6.0', '6.1', '6.2'
];

// 🕉️ Preferred Caste (Multi-select)

selectedCastes: string[] = []; // store multiple selections

isCasteSelected(caste: string): boolean {
  return this.selectedCastes.includes(caste);
}

toggleCaste(caste: string) {
  const index = this.selectedCastes.indexOf(caste);
  if (index === -1) {
    this.selectedCastes.push(caste);
  } else {
    this.selectedCastes.splice(index, 1);
  }
}


  onSubmit() {

  const model = {
    ageFrom: this.ageFrom,
    ageTo: this.ageTo,
    salaryFrom: this.salaryFrom,
    salaryTo: this.salaryTo,
    maritalStatus: this.selectedMaritalStatus,
    expectedLanguages: this.expectedLanguages,
    regions: this.selectedRegions,
    professions: this.selectedProfessions,
    castes: this.selectedCastes,
    heightFrom: this.heightFrom,
    heightTo: this.heightTo,
    opinion: this.opinion
  };

  console.log("Sending to backend:", model);
  alert('Expectations submitted successfully!');

  // ❌ Remove during testing
   this.router.navigate(['/upload-photos']);
}

// ⭐ Add this function — required by template
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

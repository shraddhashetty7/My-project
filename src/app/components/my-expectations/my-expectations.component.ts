import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-expectations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-expectations.component.html',
  styleUrls: ['./my-expectations.component.css']
})
export class MyExpectationsComponent {
skipAndContinue() {
throw new Error('Method not implemented.');
}
submitVerification() {
throw new Error('Method not implemented.');
}
goToUploadPhotos() {
throw new Error('Method not implemented.');
}

  // 🔗 API URL
  private apiUrl = 'https://localhost:7011/api/Expectations';

  // 🆔 Logged-in user id (example)
  userId: number = 1;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  // 💬 Opinion
  opinion: string = '';

  // 💍 Marital Status
  maritalStatusOptions: string[] = [
    'Single',
    'Married',
    'Divorced',
    'Widow / Widower'
  ];
  selectedMaritalStatus: string[] = [];

  toggleMaritalStatus(status: string) {
    const index = this.selectedMaritalStatus.indexOf(status);
    index === -1
      ? this.selectedMaritalStatus.push(status)
      : this.selectedMaritalStatus.splice(index, 1);
  }

  isMaritalStatusSelected(status: string): boolean {
    return this.selectedMaritalStatus.includes(status);
  }

  // 🗣️ Languages
  expectedLanguages: string[] = [];
  languageOptions: string[] = [
    'Kannada',
    'Tulu',
    'Kundapura Kannada',
    'English',
    'Hindi'
  ];

  toggleLanguage(language: string) {
    const index = this.expectedLanguages.indexOf(language);
    index === -1
      ? this.expectedLanguages.push(language)
      : this.expectedLanguages.splice(index, 1);
  }

  isLanguageSelected(language: string): boolean {
    return this.expectedLanguages.includes(language);
  }

  // 🌍 Regions
  selectedRegions: string[] = [];
  regionOptions: string[] = [
    'Udupi', 'Kundapura', 'Mangalore', 'Bangalore',
    'Other parts of Karnataka', 'Mumbai', 'Pune', 'Goa',
    'Other states of India',
    'Gulf Countries (UAE, Qatar, Oman, etc.)',
    'Europe Countries',
    'USA / Canada',
    'Australia / New Zealand',
    'Other Foreign Countries'
  ];

  toggleRegion(region: string) {
    const index = this.selectedRegions.indexOf(region);
    index === -1
      ? this.selectedRegions.push(region)
      : this.selectedRegions.splice(index, 1);
  }

  isRegionSelected(region: string): boolean {
    return this.selectedRegions.includes(region);
  }

  // 🎓 Professions
  selectedProfessions: string[] = [];
  professionOptions: string[] = [
    'Engineer', 'Doctor', 'Teacher / Professor', 'Medical Sector',
    'Business', 'Lawyer', 'Artist', 'Government Employee',
    'Private Sector Employee', 'IT / Software Professional',
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

  toggleProfession(profession: string) {
    const index = this.selectedProfessions.indexOf(profession);
    index === -1
      ? this.selectedProfessions.push(profession)
      : this.selectedProfessions.splice(index, 1);
  }

  isProfessionSelected(profession: string): boolean {
    return this.selectedProfessions.includes(profession);
  }

  // 🧍 Age / Salary / Height
  ageFrom: string = '';
  ageTo: string = '';
  salaryFrom: string = '';
  salaryTo: string = '';
  heightFrom: string = '';
  heightTo: string = '';

  heightOptions: string[] = [
    '5.0','5.1','5.2','5.3','5.4','5.5',
    '5.6','5.7','5.8','5.9','6.0','6.1','6.2'
  ];

  // 🕉️ Castes
  casteOptions: string[] = ['Bunt', 'Billava', 'Other', 'Any Caste'];
  selectedCastes: string[] = [];

  toggleCaste(caste: string) {
    const index = this.selectedCastes.indexOf(caste);
    index === -1
      ? this.selectedCastes.push(caste)
      : this.selectedCastes.splice(index, 1);
  }

  isCasteSelected(caste: string): boolean {
    return this.selectedCastes.includes(caste);
  }

  // 🚀 SUBMIT (CREATE EXPECTATION)
  onSubmit() {

    const payload = {
      userId: this.userId,

      ageFrom: this.ageFrom || null,
      ageTo: this.ageTo || null,
      salaryFrom: this.salaryFrom || null,
      salaryTo: this.salaryTo || null,
      heightFrom: this.heightFrom || null,
      heightTo: this.heightTo || null,

      maritalStatus: this.selectedMaritalStatus.join(','),
      expectedLanguages: this.expectedLanguages.join(','),
      regions: this.selectedRegions.join(','),
      professions: this.selectedProfessions.join(','),
      castes: this.selectedCastes.join(','),

      opinion: this.opinion
    };

    console.log('📦 Sending to backend:', payload);

    this.http.post<any>(this.apiUrl, payload).subscribe({
      next: (res) => {
        console.log('✅ Saved Successfully');
        console.log('🆔 Expectation ID:', res.expectationID);
        this.router.navigate(['/upload-photos']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('❌ Status:', err.status);
        console.error('❌ Error:', err.error);
      }
    });
  }

  // 🔙 Navigation
  goBack() {
    this.router.navigate(['/astrological-information']);
  }

  saveAndContinue() {
    //this.router.navigate(['/upload-photos']);
  }
}

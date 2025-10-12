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
maritalStatusOptions: any;
  constructor(private router: Router) {}

  // 🌍 Multi-select Regions
  selectedRegions: string[] = [];
  regionOptions: string[] = [
    'North India',
    'South India',
    'East India',
    'West India',
    'Central India',
    'Abroad'
  ];

  // 🎓 Multi-select Professions
  selectedProfessions: string[] = [];
  professionOptions: string[] = [
    'Engineer',
    'Doctor',
    'Teacher',
    'Business',
    'Lawyer',
    'Artist',
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
}

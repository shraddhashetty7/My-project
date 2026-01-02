import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FamilyInformationService } from '../../services/family-information.service';

// -------------------------------
// 🔹 SIBLING INTERFACE
// -------------------------------
interface Sibling {
  name: string;
  gender: string;
  maritalStatus: string;
  occupation: string;
}

// -------------------------------
// 🔹 FAMILY MODEL INTERFACE
// -------------------------------
interface FamilyModel {
  userID: number;
  fatherName: string;
  fatherHometown: string;
  fatherProfession: string;
  motherName: string;
  motherHometown: string;
  motherProfession: string;
  currentHometown: string;
  languagesKnown: string[];
  familyValue: string;
  familyStatus: string;
}

@Component({
  selector: 'app-family-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './family-information.component.html',
  styleUrls: ['./family-information.component.css']
})
export class FamilyInformationComponent {

  // -------------------------------
  // 🔹 FAMILY MODEL
  // -------------------------------
  model: FamilyModel = {
    userID: 1, // 🔴 Replace later with logged-in user id
    fatherName: '',
    fatherHometown: '',
    fatherProfession: '',
    motherName: '',
    motherHometown: '',
    motherProfession: '',
    currentHometown: '',
    languagesKnown: [],
    familyValue: '',
    familyStatus: ''
  };

  // -------------------------------
  // 🔹 SIBLING DATA
  // -------------------------------
  numSiblings = 0;
  siblings: Sibling[] = [];
  readonly MAX_SIBLINGS = 5;

  constructor(
    private router: Router,
    private familyService: FamilyInformationService
  ) {}

  // -------------------------------
  // 🔹 LANGUAGE SELECTION
  // -------------------------------
  toggleLanguage(language: string) {
    if (this.model.languagesKnown.includes(language)) {
      this.model.languagesKnown =
        this.model.languagesKnown.filter(l => l !== language);
    } else {
      this.model.languagesKnown.push(language);
    }
  }

  isLanguageSelected(language: string): boolean {
    return this.model.languagesKnown.includes(language);
  }

  // -------------------------------
  // 🔹 FAMILY VALUE & STATUS
  // -------------------------------
  selectFamilyValue(value: string) {
    this.model.familyValue = value;
  }

  selectFamilyStatus(status: string) {
    this.model.familyStatus = status;
  }

  // -------------------------------
  // 🔹 SIBLING MANAGEMENT
  // -------------------------------
  updateSiblings() {
    const count = Math.min(Math.max(this.numSiblings, 0), this.MAX_SIBLINGS);

    while (this.siblings.length < count) {
      this.siblings.push({
        name: '',
        gender: '',
        maritalStatus: '',
        occupation: ''
      });
    }

    while (this.siblings.length > count) {
      this.siblings.pop();
    }
  }

  addSibling() {
    if (this.siblings.length < this.MAX_SIBLINGS) {
      this.siblings.push({
        name: '',
        gender: '',
        maritalStatus: '',
        occupation: ''
      });
      this.numSiblings = this.siblings.length;
    }
  }

  removeSibling(index: number) {
    this.siblings.splice(index, 1);
    this.numSiblings = this.siblings.length;
  }

  // -------------------------------
  // 🔹 SAVE FAMILY INFO (400 SAFE)
  // -------------------------------
  saveAndContinue() {

    // 🔐 Frontend required validation
    if (
      !this.model.fatherName ||
      !this.model.motherName ||
      !this.model.familyValue ||
      !this.model.familyStatus
    ) {
      alert('Please fill all required family details');
      return;
    }

    const payload = {
      ...this.model,
      languagesKnown: this.model.languagesKnown.join(', '),
      siblings: this.siblings
    };

    console.log('📤 Sending Family Info:', payload);

    this.familyService.saveFamilyInfo(payload).subscribe({
      next: res => {
        console.log('✅ Family Info saved successfully', res);
        // this.router.navigate(['/lifestyle']);
      },
      error: err => {
        console.error('❌ API Error:', err.error);
      }
    });
  }

  // -------------------------------
  // 🔹 NAVIGATION
  // -------------------------------
  goBack() {
    this.router.navigate(['/education-career']);
  }

  skip() {
    this.router.navigate(['/lifestyle']);
  }
}

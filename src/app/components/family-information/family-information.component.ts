import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './family-information.component.html',
  styleUrls: ['./family-information.component.css']
})
export class FamilyInformationComponent {
  // Model for family info
  model: any = {
    fatherName: '',
    fatherProfession: '',
    motherName: '',
    motherProfession: '',
    familyValue: '',
    familyStatus: ''
  };

  // Sibling fields
  numSiblings: number = 0;
  siblings: any[] = [];

  constructor(private router: Router) {}

  // ========================
  // 🔹 FAMILY VALUE & STATUS
  // ========================
  selectFamilyValue(value: string) {
    this.model.familyValue = value;
  }

  selectFamilyStatus(status: string) {
    this.model.familyStatus = status;
  }

  // ========================
  // 🔹 DYNAMIC SIBLING LOGIC
  // ========================
  updateSiblings() {
    const count = Math.max(0, Math.min(this.numSiblings, 5)); // limit 0–5
    this.siblings = Array.from({ length: count }, () => ({
      name: '',
      gender: '',
      maritalStatus: '',
      occupation: ''
    }));
  }

  addSibling() {
    if (this.siblings.length < 5) {
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

  // ========================
// 🔹 SAVE & NAVIGATION
// ========================
saveAndContinue() {
  const familyInfo = {
    ...this.model,
    siblings: this.siblings
  };

  console.log('✅ Family Information Saved:', familyInfo);

  // Navigate to Lifestyle page
  this.router.navigate(['/lifestyle']);
}

skip() {
  console.log('⏭️ Skipped Family Info');
  this.router.navigate(['/lifestyle']);
}

goBack() {
  this.router.navigate(['/education-career']);
}
}
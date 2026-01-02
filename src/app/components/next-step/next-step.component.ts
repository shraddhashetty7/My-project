import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/next_step.service';

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.css']
})
export class NextStepComponent {

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  // ✅ MODEL MATCHES BACKEND
  model = {
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    workLocation: '',
    caste: '',
    otherCaste: ''
  };

  isOtherCasteSelected = false;

  onCasteChange(selected: string) {
    this.isOtherCasteSelected = selected === 'Other';
    if (!this.isOtherCasteSelected) {
      this.model.otherCaste = '';
    }
  }

  // ✅ SUBMIT FORM
  goToEducationCareer(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
      return;
    }

    // ✅ PREPARE PAYLOAD FOR API
   const apiModel = {
  fullName: this.model.fullName?.trim() || '',
  email: this.model.email?.trim() || '',
  phone: this.model.phone?.trim() || '',
  gender: this.model.gender?.trim() || '',
  workLocation: this.model.workLocation?.trim() || '',
  caste: this.model.caste === 'Other'
          ? this.model.otherCaste?.trim() || ''
          : this.model.caste?.trim() || '',
  otherCaste: this.model.caste === 'Other'
          ? this.model.otherCaste?.trim() || null
          : null
};


    // 🔍 DEBUG LOG
    console.log('Sending to API:', apiModel);

    // 🌐 API CALL
    this.registerService.create(apiModel).subscribe(
      res => {
        console.log('✅ API Response:', res);
        this.router.navigate(['/education-career']); // keep disabled for testing
      },
      err => {
        console.error('❌ API Error:', err);
      }
    );
  }

  goBack() {
    this.router.navigate(['/personal-details']);
  }
}

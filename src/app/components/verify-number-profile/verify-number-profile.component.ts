import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerifyService } from '../../services/verify.service';

@Component({
  selector: 'app-verify-number-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-number-profile.component.html',
  styleUrls: ['./verify-number-profile.component.css']
})
export class VerifyNumberProfileComponent {

  // 🔹 User (test any active ID here)
  userId: number = 1;

  aadhaarNumber: string = '';
  aadhaarMobile: string = '';
  fullName: string = '';
  declarationAccepted: boolean = false;

  submitted: boolean = false;
  verificationResult: any;

  constructor(
    private router: Router,
    private verifyService: VerifyService
  ) {}

  // =========================
  // TEST PARTICULAR USER ID
  // =========================
  testUserId(): void {
    this.verifyService.getByUserId(this.userId).subscribe({
      next: (res: any) => {

        console.log('Verification found:', res);
        this.verificationResult = res;
      },
      error: () => {
        alert('No verification found for User ID: ' + this.userId);
        this.verificationResult = null;
      }
    });
  }

  // =========================
  // Save & Continue
  // =========================
  submitVerification(): void {

  console.log('🔥 submitVerification() triggered');

  if (!this.aadhaarNumber || this.aadhaarNumber.length !== 12) {
    alert('Please enter a valid 12-digit Aadhaar number');
    return;
  }

  if (!this.aadhaarMobile || this.aadhaarMobile.length !== 10) {
    alert('Please enter a valid Aadhaar-linked mobile number');
    return;
  }

  if (!this.fullName) {
    alert('Please enter full name as per Aadhaar');
    return;
  }

  if (!this.declarationAccepted) {
    alert('Please accept the declaration');
    return;
  }

  const payload = {
    userId: this.userId,
    aadhaarNumber: this.aadhaarNumber,
    mobileNumber: this.aadhaarMobile,
    fullName: this.fullName,
    declarationAccepted: this.declarationAccepted
  };

  console.log('📤 Payload being sent:', payload);

  this.verifyService.create(payload).subscribe({
    next: (res) => {
      console.log('✅ API Response:', res);
      this.submitted = true;

      // navigation paused intentionally
      // this.router.navigate(['/congratulations']);
    },
    error: (err) => {
      console.error('❌ API Error:', err);
    }
  });
}

  // =========================
  // Helpers
  // =========================
  maskAadhaar(aadhaar: string): string {
    return '**** **** ' + aadhaar.slice(-4);
  }

  maskMobile(mobile: string): string {
    return '******' + mobile.slice(-4);
  }

  goBack(): void {
    this.router.navigate(['/upload-photos']);
  }

  skipAndContinue(): void {
    this.router.navigate(['/congratulations']);
  }
}

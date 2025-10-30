import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-number-profile',
  templateUrl: './verify-number-profile.component.html',
  styleUrls: ['./verify-number-profile.component.css']
})
export class VerifyNumberProfileComponent {

  constructor(private router: Router) {}

  goBack() {
  this.router.navigate(['/upload-photos']);
}

goToPayment() {
  // Navigate to congratulations page
  this.router.navigate(['/congratulations']);
}

// ✅ Skip & Continue button action
skipAndContinue() {
  this.router.navigate(['/congratulations']);
}

}

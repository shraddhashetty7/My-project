import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent {

  constructor(private router: Router) {}

 // ✅ Navigate to Verify page
  goToVerify() {
    this.router.navigate(['/verify']);
  }

  // ✅ Navigate back to My Expectations page
  goBack() {
    this.router.navigate(['/my-expectations']);
  }
}

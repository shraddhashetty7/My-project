import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-information',
  standalone: true, // ✅ Required for Angular standalone routing
  templateUrl: './family-information.component.html',
  styleUrls: ['./family-information.component.css']
})
export class FamilyInformationComponent {
  constructor(private router: Router) {}

  goToLifestyle() {
    this.router.navigate(['/lifestyle']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent {
  constructor(private router: Router) {}

  goToLifestyle() {
    // Navigate to lifestyle or next page
    this.router.navigate(['/lifestyle']);
  }
}

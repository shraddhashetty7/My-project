import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent {
  model: any = {
    diet: '',
    smoke: '',
    drink: '',
    hobbies: ''
  };

  constructor(private router: Router) {}

  // ✅ Save & Continue → Astrological Information Page
  saveAndContinue() {
    console.log('✅ Lifestyle Information Saved:', this.model);
    this.router.navigate(['/astrological-information']);
  }

  // ✅ Back → Family Information Page
  goBack() {
    this.router.navigate(['/family-information']);
  }
}

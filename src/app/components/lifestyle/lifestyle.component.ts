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
    complexion: '',
    physique: '',
    disability: '',
    smoke: '',
    drink: ''
  };

  constructor(private router: Router) {}

  // ✅ Selection Methods
  selectDiet(value: string) {
    this.model.diet = value;
  }

  selectComplexion(value: string) {
    this.model.complexion = value;
  }

  selectPhysique(value: string) {
    this.model.physique = value;
  }

  selectDisability(value: string) {
    this.model.disability = value;
  }

  selectSmoke(value: string) {
    this.model.smoke = value;
  }

  selectDrink(value: string) {
    this.model.drink = value;
  }

  // ✅ Navigation
  saveAndContinue() {
    console.log('✅ Lifestyle Information Saved:', this.model);
    this.router.navigate(['/astrological-information']);
  }

  goBack() {
    this.router.navigate(['/family-information']);
  }

  skip() {
    console.log('⏭️ Skipped Lifestyle Info');
    this.router.navigate(['/astrological-information']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LifestyleService } from '../../services/lifestyle.service';

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent {

  // Model holding all lifestyle info
  model = {
    userID: 10,
    height: '',
    weight: '',
    diet: '',
    complexion: '',
    physique: '',
    disability: '',
    smoke: '',
    drink: ''
  };

  constructor(
    private router: Router,
    private lifestyleService: LifestyleService
  ) {}

  // Methods to update model when buttons are clicked
  selectHeight(value: string) {
    this.model.height = value;
  }

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

  // Save data and navigate
  saveAndContinue() {
    if (!this.model.height || !this.model.weight || !this.model.diet) {
      alert('Please fill all required lifestyle details');
      return;
    }

    const payload = { ...this.model };

    console.log('📤 Sending Lifestyle Info:', payload);

    this.lifestyleService.create(payload).subscribe({
      next: (res: any) => {
        console.log('✅ Lifestyle Info saved successfully', res);
        // this.router.navigate(['/astrological-information']);
      },
      error: (err: any) => {
        console.error('❌ API Error:', err.error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/family-information']);
  }

  skip() {
    this.router.navigate(['/astrological-information']);
  }
}

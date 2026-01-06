import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent {

  // 🔹 Model bound to HTML
  model = {
    userID: 1,          // set from storage later
    height: '',
    weight: '',
    diet: '',
    complexion: '',
    physique: '',
    disability: '',
    smoke: '',
    drink: ''
  };

  constructor(private router: Router) {
    // ✅ Get userID from previous steps
    const storedUserId = localStorage.getItem('userID');
    if (storedUserId) {
      this.model.userID = Number(storedUserId);
    }
  }

  // ================= HEIGHT =================
  selectHeight(value: string) {
    this.model.height = value;
  }

  // ================= DIET =================
  selectDiet(value: string) {
    this.model.diet = value;
  }

  // ================= COMPLEXION =================
  selectComplexion(value: string) {
    this.model.complexion = value;
  }

  // ================= PHYSIQUE =================
  selectPhysique(value: string) {
    this.model.physique = value;
  }

  // ================= DISABILITY =================
  selectDisability(value: string) {
    this.model.disability = value;
  }

  // ================= SMOKING =================
  selectSmoke(value: string) {
    this.model.smoke = value;
  }

  // ================= DRINKING =================
  selectDrink(value: string) {
    this.model.drink = value;
  }

  // ================= ACTION BUTTONS =================

  saveAndContinue() {
    console.log('📤 Sending Lifestyle Info:', this.model);

    // ❌ Stop navigation for now (testing)
    // this.router.navigate(['/next-step']);

    // ✅ Later → call API here
  }

  skip() {
    console.log('⏭️ Lifestyle skipped');
    this.router.navigate(['/next-step']);
  }

  goBack() {
    this.router.navigate(['/family-information']);
  }
}

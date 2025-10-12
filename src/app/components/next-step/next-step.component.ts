import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add CommonModule here
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.css']
})
export class NextStepComponent {
  constructor(private router: Router) {}

  goToEducationCareer() {
    this.router.navigate(['/education-career']);
  }

  goBack() {
    this.router.navigate(['/landing']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrls: ['./next-step.component.css']
})
export class NextStepComponent {
  constructor(private router: Router) {}

  goToFamilyInfo() {
    this.router.navigate(['/family-information']);
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // ✅ Router + RouterLink
import { RegisterComponent } from '../register/register.component';  // ✅ Register component

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RegisterComponent],  // ✅ include both
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router) {}

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

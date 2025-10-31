import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RegisterComponent, LoginComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {}

import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { NextStepComponent } from './components/next-step/next-step.component';
import { DetailsComponent } from './components/details/details.component';  // fixed

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'next-step', component: NextStepComponent },
  { path: 'details', component: DetailsComponent }
];

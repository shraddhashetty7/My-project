import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NextStepComponent } from './components/next-step/next-step.component';
import { FamilyInformationComponent } from './components/family-information/family-information.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'next-step', component: NextStepComponent },
  { path: 'family-information', component: FamilyInformationComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: '**', redirectTo: 'landing' } // optional: handles unknown routes
];

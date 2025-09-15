import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NextStepComponent } from './components/next-step/next-step.component';
import { FamilyInformationComponent } from './components/family-information/family-information.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'next-step', component: NextStepComponent },
  { path: 'family-information', component: FamilyInformationComponent }

];

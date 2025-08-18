import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NextStepComponent } from './components/next-step/next-step.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'next-step', component: NextStepComponent }
];

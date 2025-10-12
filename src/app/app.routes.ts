import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NextStepComponent } from './components/next-step/next-step.component';

import { EducationCareerComponent } from './components/education-career/education-career.component';
import { FamilyInformationComponent } from './components/family-information/family-information.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';

import { AstrologicalInformationComponent } from './components/astrological-information/astrological-information.component';
import { MyExpectationsComponent } from './components/my-expectations/my-expectations.component';
import { UploadPhotosComponent } from './components/upload-photos/upload-photos.component';
import { VerifyNumberProfileComponent } from './components/verify-number-profile/verify-number-profile.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

import { PaymentComponent } from './components/payment/payment.component';



export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'next-step', component: NextStepComponent },
  { path: 'education-career', component: EducationCareerComponent },
  { path: 'family-information', component: FamilyInformationComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  
  { path: 'astrological-information', component: AstrologicalInformationComponent },
  { path: 'my-expectations', component: MyExpectationsComponent },
  { path: 'upload-photos', component: UploadPhotosComponent },
  { path: 'verify', component: VerifyNumberProfileComponent },
  { path: 'congratulations', component: CongratulationsComponent },

  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: 'landing' }
];

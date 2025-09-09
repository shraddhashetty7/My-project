import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  // dropdown options
  registerAsOptions: string[] = ['Bride', 'Groom', 'Other'];

  // form fields
  selectedOption: string = '';
  otherDescription: string = '';
  name: string = '';
  countryCode: string = '';
  phone: string = '';
  caste: string = '';

  // submit handler
  onRegister() {
    console.log('Form submitted:', {
      registerAs: this.selectedOption,
      otherDescription: this.otherDescription,
      name: this.name,
      countryCode: this.countryCode,
      phone: this.phone,
      caste: this.caste
    });
    alert('Form submitted successfully!');
  }
}

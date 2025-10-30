import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-astrological-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './astrological-information.component.html',
  styleUrls: ['./astrological-information.component.css']
})
export class AstrologicalInformationComponent {
  constructor(private router: Router) {}

  // Dropdown values for Nakshatra, Raasi, Dosham
  stars: string[] = [
    'ಅಶ್ವಿನಿ / Ashwini', 'ಭರಣಿ / Bharani', 'ಕೃತಿಕಾ / Krittika', 'ರೋಹಿಣಿ / Rohini',
    'ಮೃಗಶಿರ / Mrigashira', 'ಆರ್ಧ್ರ / Ardra', 'ಪುನರ್ವಸು / Punarvasu', 'ಪುಷ್ಯ / Pushya',
    'ಆಶ್ಲೇಷ / Ashlesha', 'ಮಘ / Magha', 'ಪೂರ್ವ ಫಲ್ಗುಣಿ / Purva Phalguni', 'ಉತ್ತರ ಫಲ್ಗುಣಿ / Uttara Phalguni',
    'ಹಸ್ತ / Hasta', 'ಚಿತ್ರ / Chitra', 'ಸ್ವಾತಿ / Swati', 'ವಿಶಾಖ / Vishakha',
    'ಅನುರಾಧ / Anuradha', 'ಜ್ಯೇಷ್ಠ / Jyeshta', 'ಮೂಲ / Mula', 'ಪೂರ್ವಾಷಾಢ / Purva Ashadha',
    'ಉತ್ತರಾಷಾಢ / Uttara Ashadha', 'ಶ್ರವಣ / Shravana', 'ಧನಿಷ್ಠ / Dhanishta',
    'ಶತಭಿಷ / Shatabhisha', 'ಪೂರ್ವಭಾದ್ರಪದ / Purva Bhadrapada', 'ಉತ್ತರಭಾದ್ರಪದ / Uttara Bhadrapada', 'ರೇವತಿ / Revati'
  ];

  raasis: string[] = [
    'ಮೇಷ / Mesha / Aries', 'ವೃಷಭ / Vrishabha / Taurus', 'ಮಿಥುನ / Mithuna / Gemini',
    'ಕಟಕ / Karka / Cancer', 'ಸಿಂಹ / Simha / Leo', 'ಕನ್ಯಾ / Kanya / Virgo',
    'ತುಲಾ / Tula / Libra', 'ವೃಶ್ಚಿಕ / Vrischika / Scorpio', 'ಧನು / Dhanu / Sagittarius',
    'ಮಕರ / Makara / Capricorn', 'ಕುಂಭ / Kumbha / Aquarius', 'ಮೀನ / Meena / Pisces'
  ];

  doshams: string[] = ['Yes', 'No', 'Partial'];

  // Form model values
  selectedStar = '';
  selectedRaasi = '';
  selectedDosham = '';
  birthDate = '';

  // 12-hour time picker values
  birthHour: number | null = null;
  birthMinute: string | null = null;
  birthPeriod: 'AM' | 'PM' | null = null;

  // Dropdown lists for 12-hour time
  hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1); // 1 to 12
  minutes: string[] = Array.from({ length: 60 }, (_, i) => (i < 10 ? '0' + i : '' + i)); // 00 to 59

  // ========================
  // 🔹 SAVE & NAVIGATION
  // ========================
  saveAndContinue() {
    const formattedTime =
      this.birthHour && this.birthMinute && this.birthPeriod
        ? `${this.padZero(this.birthHour)}:${this.birthMinute} ${this.birthPeriod}`
        : '';

    const astroInfo = {
      raasi: this.selectedRaasi,
      nakshatra: this.selectedStar,
      dosham: this.selectedDosham,
      birthDate: this.birthDate,
      birthTime: formattedTime
    };

    console.log('✅ Astrological Information Saved:', astroInfo);

    // Navigate to My Expectations page
    this.router.navigate(['/my-expectations']);
  }
  padZero(birthHour: number) {
    throw new Error('Method not implemented.');
  }

  skip() {
    console.log('⏭️ Skipped Astrological Information');
    this.router.navigate(['/my-expectations']);
  }

  goBack() {
    this.router.navigate(['/lifestyle']);
  }
}

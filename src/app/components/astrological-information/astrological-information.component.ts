import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AstrologyService } from '../../services/astrology.service';

@Component({
  selector: 'app-astrological-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './astrological-information.component.html',
  styleUrls: ['./astrological-information.component.css']
})
export class AstrologicalInformationComponent {

  constructor(
    private router: Router,
    private astrologyService: AstrologyService
  ) {}

  // 🔹 Nakshatra – Kannada + English
  stars: string[] = [
    'ಅಶ್ವಿನಿ / Ashwini', 'ಭರಣಿ / Bharani', 'ಕೃತಿಕಾ / Krittika',
    'ರೋಹಿಣಿ / Rohini', 'ಮೃಗಶಿರ / Mrigashira', 'ಆರ್ಧ್ರ / Ardra',
    'ಪುನರ್ವಸು / Punarvasu', 'ಪುಷ್ಯ / Pushya', 'ಆಶ್ಲೇಷ / Ashlesha',
    'ಮಘ / Magha', 'ಪೂರ್ವ ಫಲ್ಗುಣಿ / Purva Phalguni',
    'ಉತ್ತರ ಫಲ್ಗುಣಿ / Uttara Phalguni', 'ಹಸ್ತ / Hasta',
    'ಚಿತ್ರ / Chitra', 'ಸ್ವಾತಿ / Swati', 'ವಿಶಾಖ / Vishakha',
    'ಅನುರಾಧ / Anuradha', 'ಜ್ಯೇಷ್ಠ / Jyeshta', 'ಮೂಲ / Mula',
    'ಪೂರ್ವಾಷಾಢ / Purva Ashadha', 'ಉತ್ತರಾಷಾಢ / Uttara Ashadha',
    'ಶ್ರವಣ / Shravana', 'ಧನಿಷ್ಠ / Dhanishta',
    'ಶತಭಿಷ / Shatabhisha', 'ಪೂರ್ವಭಾದ್ರಪದ / Purva Bhadrapada',
    'ಉತ್ತರಭಾದ್ರಪದ / Uttara Bhadrapada', 'ರೇವತಿ / Revati'
  ];

  // 🔹 Raasi – Kannada + English
  raasis: string[] = [
    'ಮೇಷ / Mesha / Aries', 'ವೃಷಭ / Vrishabha / Taurus',
    'ಮಿಥುನ / Mithuna / Gemini', 'ಕಟಕ / Karka / Cancer',
    'ಸಿಂಹ / Simha / Leo', 'ಕನ್ಯಾ / Kanya / Virgo',
    'ತುಲಾ / Tula / Libra', 'ವೃಶ್ಚಿಕ / Vrischika / Scorpio',
    'ಧನು / Dhanu / Sagittarius', 'ಮಕರ / Makara / Capricorn',
    'ಕುಂಭ / Kumbha / Aquarius', 'ಮೀನ / Meena / Pisces'
  ];

  // 🔹 Form Model
  model = {
    userID: 10,
    raasi: '',
    nakshatra: '',
    birthDate: '',
    birthTime: '',
    placeOfBirth: ''
  };

  // 🔹 Time picker
  birthHour: number | null = null;
  birthMinute: string | null = null;
  birthPeriod: 'AM' | 'PM' | null = null;

  hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  minutes: string[] = Array.from({ length: 60 }, (_, i) =>
    i < 10 ? '0' + i : '' + i
  );

  // ========================
  // 🔹 SAVE WITH API CALL
  // ========================
  saveAndContinue() {

    if (!this.model.raasi || !this.model.nakshatra || !this.model.birthDate) {
      alert('ದಯವಿಟ್ಟು ಅಗತ್ಯ ಮಾಹಿತಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ');
      return;
    }

    this.model.birthTime =
      this.birthHour && this.birthMinute && this.birthPeriod
        ? `${this.padZero(this.birthHour)}:${this.birthMinute} ${this.birthPeriod}`
        : '';

    const payload = { ...this.model };

    console.log('📤 Sending Astrology Data:', payload);

    this.astrologyService.create(payload).subscribe({
      next: (res: any) => {
        console.log('✅ Astrology Info saved successfully', res);
        this.router.navigate(['/my-expectations']);
      },
      error: (err: any) => {
        console.error('❌ API Error:', err.error);
      }
    });
  }

  padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  skip() {
    this.router.navigate(['/my-expectations']);
  }

  goBack() {
    this.router.navigate(['/lifestyle']);
  }
}

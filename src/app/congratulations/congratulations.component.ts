import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit, OnDestroy {
  secondsLeft = 5;  // ⏱ adjust this number for countdown duration
  progressPercent = 0;
  intervalRef: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    const total = this.secondsLeft;
    const startTime = Date.now();

    this.intervalRef = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const remaining = Math.max(total - elapsed, 0);
      this.secondsLeft = Math.ceil(remaining);
      this.progressPercent = ((total - remaining) / total) * 100;

      if (remaining <= 0) {
        clearInterval(this.intervalRef);
        this.goHome(); // redirect automatically
      }
    }, 100);
  }

  goToPayment(): void {
    this.router.navigate(['/payment']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.intervalRef) clearInterval(this.intervalRef);
  }
}

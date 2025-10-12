import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {
secondsLeft: any;
goHome() {
throw new Error('Method not implemented.');
}
goToPayment() {
throw new Error('Method not implemented.');
}
progressPercent: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Automatically redirect to /payment after 15 seconds
    setTimeout(() => {
      this.router.navigate(['/payment']);
    }, 15000);
  }
}

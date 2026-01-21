import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  testUserId: number = 10; // ✅ TEMP USER ID

  readonly upiId: string = 'yourupi@bank';
  transactionId: string = '';

  product: string = 'Profile Verification';
  subtotal: number = 499;
  gstPercent: number = 18;
  gst: number = 0;
  total: number = 0;

  errorMessage = '';
  successMessage = '';
  isSubmitting = false;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.gst = Math.round((this.subtotal * this.gstPercent) / 100);
    this.total = this.subtotal + this.gst;
  }

  isValidTransactionId(): boolean {
    return /^[a-zA-Z0-9]{10,22}$/.test(this.transactionId.trim());
  }

  proceed(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.transactionId) {
      this.errorMessage = 'Please enter the Transaction ID.';
      return;
    }

    if (!this.isValidTransactionId()) {
      this.errorMessage = 'Invalid Transaction ID (UTR).';
      return;
    }

    const paymentDto = {
      userId: this.testUserId, // ✅ explicit
      amount: this.total,
      paymentMethod: 'UPI',
      transactionId: this.transactionId.trim()
    };

    console.log('➡️ Sending Payment DTO to API:', paymentDto);

    this.isSubmitting = true;

    this.paymentService.createPayment(paymentDto).subscribe({
      next: (res) => {
        console.log('✅ API Response:', res);
        this.successMessage = 'Payment submitted successfully.';
        this.transactionId = '';
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('❌ API Error:', err);
        this.errorMessage = 'Payment failed. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}

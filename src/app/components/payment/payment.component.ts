import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, ZXingScannerModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  upiId = '';
  transactionId = '';
  
  // ✅ Correct type and values
  qrFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  product = 'Profile Activation';
  subtotal = 1000;
  gstPercent = 18;
  gst = (this.subtotal * this.gstPercent) / 100;
  total = this.subtotal + this.gst;

  onCodeResult(result: string) {
    this.upiId = result;
  }

  proceed() {
    if (!this.transactionId || !this.upiId) {
      alert('Please enter UPI ID and Transaction ID before proceeding.');
      return;
    }
    alert(`✅ Payment initiated for ₹${this.total} via ${this.upiId}`);
  }
}

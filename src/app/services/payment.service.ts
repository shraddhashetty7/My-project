import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'https://localhost:7011/api/Payment';

  constructor(private http: HttpClient) {}

  createPayment(paymentDto: {
    userId: number;
    amount: number;
    paymentMethod: string;
    transactionId: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, paymentDto);
  }

  // CREATE
  create(model: any) {
    return this.http.post(this.apiUrl, model);
  }

  // READ ALL
  getAll() {
    return this.http.get(this.apiUrl);
  }

  // READ BY ID
  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  update(id: number, model: any) {
    return this.http.put(`${this.apiUrl}/${id}`, model);
  }

  // DELETE
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  private apiUrl = 'https://localhost:7011/api/Verify';

  constructor(private http: HttpClient) {}

  create(model: any): Observable<any> {
    return this.http.post(this.apiUrl, model);
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // ✅ THIS IS WHAT YOUR COMPONENT IS CALLING
  getByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
}

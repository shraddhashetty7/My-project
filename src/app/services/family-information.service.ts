import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyInformationService {

  private apiUrl = 'https://localhost:7058/api/FamilyInfo';
  // 🔁 Change URL if your backend route is different

  constructor(private http: HttpClient) {}

  /* ================= CREATE ================= */
  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  /* ================= GET BY USER ID ================= */
  getByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  /* ================= UPDATE ================= */
  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  /* ================= DELETE ================= */
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

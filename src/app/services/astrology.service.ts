import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AstrologyService {

  private apiUrl = 'https://localhost:7011/api/AstrologyInfo';

  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  getByUserId(userId: number) {
    return this.http.get(`${this.apiUrl}/User/${userId}`);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}

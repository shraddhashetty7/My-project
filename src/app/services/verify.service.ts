import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  private apiUrl = 'https://localhost:7011/api/Verify';

  constructor(private http: HttpClient) {}

  create(model: any) {
    return this.http.post(this.apiUrl, model);
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  update(id: number, model: any) {
    return this.http.put(`${this.apiUrl}/${id}`, model);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LifestyleService {

  private apiUrl = 'https://localhost:7011/api/Lifestyle';

  constructor(private http: HttpClient) {}

  create(payload: any) {
    return this.http.post(this.apiUrl, payload);
  }
}

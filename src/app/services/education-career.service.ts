import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationCareerService {

  private apiUrl = 'https://localhost:7011/api/EducationCareer';


  constructor(private http: HttpClient) {}

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

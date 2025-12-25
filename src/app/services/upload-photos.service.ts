import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotosService {

  private apiUrl = 'https://localhost:7011/api/UploadPhotos';

  constructor(private http: HttpClient) {}

  upload(model: any) {
    return this.http.post(this.apiUrl, model);
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

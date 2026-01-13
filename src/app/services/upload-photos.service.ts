import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotosService {

  private apiUrl = 'https://localhost:7011/api/UploadPhotos';

  constructor(private http: HttpClient) {}

  // ✅ Upload photo (used by component)
  uploadPhoto(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  // ✅ Get all uploaded photos
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // ✅ Get photo by id
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ✅ Delete photo
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

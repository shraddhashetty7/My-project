import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotosService {

  private baseUrl = 'https://localhost:7011/api/UploadPhotos';

  constructor(private http: HttpClient) {}

  uploadPhotos(formData: FormData) {
    return this.http.post(
      `${this.baseUrl}/upload`,
      formData
    );
  }

  getUserPhotos(userId: number) {
    return this.http.get(
      `${this.baseUrl}/${userId}`
    );
  }

  deletePhoto(photoId: number) {
    return this.http.delete(
      `${this.baseUrl}/${photoId}`
    );
  }

  setProfilePhoto(photoId: number) {
    return this.http.put(
      `${this.baseUrl}/set-profile/${photoId}`,
      {}
    );
  }
}

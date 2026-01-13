import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UploadPhotosService } from '../../services/upload-photos.service';

@Component({
  selector: 'app-upload-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent {

  // 🔢 CONFIG
  minPhotos = 2;
  maxPhotos = 6;

  photos: Array<{ file: File | null; preview: string | null }> = [];

  isUploading = false;

  constructor(
    private router: Router,
    private uploadPhotosService: UploadPhotosService
  ) {
    // ✅ Create 6 empty slots
    this.photos = Array.from({ length: this.maxPhotos }, () => ({
      file: null,
      preview: null
    }));
  }

  // 📊 Count uploaded photos
  get uploadedPhotoCount(): number {
    return this.photos.filter(p => p.file !== null).length;
  }

  get totalPhotos(): number {
    return this.maxPhotos;
  }

  get uploadProgress(): number {
    return (this.uploadedPhotoCount / this.totalPhotos) * 100;
  }

  // 📸 Select photo (index-aware)
  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    // ✅ Image validation
    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed');
      input.value = '';
      return;
    }

    // ✅ Size validation (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.photos[index] = {
        file,
        preview: reader.result as string
      };
    };

    reader.readAsDataURL(file);
    input.value = '';
  }

  // ❌ Remove photo
  removePhoto(index: number): void {
    this.photos[index] = { file: null, preview: null };
  }

  // ⬆️ Upload photos
  uploadPhoto(): void {
    if (this.isUploading) return;

    // ✅ MIN 2 validation
    if (this.uploadedPhotoCount < this.minPhotos) {
      alert(`Please upload at least ${this.minPhotos} photos`);
      return;
    }

    this.isUploading = true;

    const formData = new FormData();
    formData.append('userId', '1'); // replace with real userId

    this.photos.forEach(p => {
      if (p.file) {
        formData.append('photos', p.file);
      }
    });

    this.uploadPhotosService.uploadPhoto(formData).subscribe({
      next: () => {
        this.isUploading = false;
        this.router.navigate(['/verify']);
      },
      error: () => {
        this.isUploading = false;
        alert('Photo upload failed');
      }
    });
  }

  // ⬅️ Navigation
  goBack(): void {
    this.router.navigate(['/my-expectations']);
  }

  skipAndContinue(): void {
    this.router.navigate(['/verify']);
  }
}

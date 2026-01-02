import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyInformationService {

  private apiUrl = 'https://localhost:7011/api/FamilyInfo';

  constructor(private http: HttpClient) {}

  saveFamilyInfo(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}

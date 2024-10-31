import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl; // Base URL of your API

  constructor(private http: HttpClient) { }

  // GET Request
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  // POST Request
  postData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, { headers });
  }

  // PUT Request
  updateData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, { headers });
  }

  uploadFile(endpoint: string, file: any, additionalData: any): Observable<any> {
    const formData: FormData = new FormData();

    for (const key in file) {
      console.log(key);
      
      if (file.hasOwnProperty(key)) {
        formData.append(key, file[key], file[key].name);
      }
    }

    for (const key in additionalData) {
      if (additionalData.hasOwnProperty(key)) {
        formData.append(key, additionalData[key]);
      }
    }

    return this.http.post(`${this.apiUrl}/${endpoint}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}

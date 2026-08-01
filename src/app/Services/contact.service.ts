// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // Envoyer un message
  sendMessage(data: any): Observable<any> {
    const url = `${this.baseUrl}/api/messages/send/simionix`;
    return this.http.post(url, data);
  }
}
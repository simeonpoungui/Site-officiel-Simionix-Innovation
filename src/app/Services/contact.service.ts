// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://backpos.brandsmillenium.com';

  constructor(private http: HttpClient) { }

  // Créer une vue (incrémenter le compteur)
  createVues(): Observable<any> {
    const url = `${this.baseUrl}/v1/spdev/create-vues`;
    return this.http.post(url, {});
  }

  // Lire les statistiques
  readVues(): Observable<any> {
    const url = `${this.baseUrl}/v1/spdev/read-vues`;
    return this.http.post(url, {});
  }

  // Envoyer un message
  sendMessage(data: any): Observable<any> {
    const url = `${this.baseUrl}/v1/spdev/message`;
    return this.http.post(url, data);
  }
}
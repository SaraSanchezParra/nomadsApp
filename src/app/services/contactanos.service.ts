import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  private apiUrl = "http://localhost:3000/email/contactanos";

  constructor(private http: HttpClient) { }

  enviarCorreo(data: Email): Observable<Email> {
    return this.http.post<Email>(this.apiUrl, data);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class TopUserService {

  // private apiUrl = "http://localhost:3000/topNomads";
  private apiUrl = "https://nomads-api.vercel.app/topNomads";


  constructor(private http: HttpClient) { }

  getTopNomads(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}

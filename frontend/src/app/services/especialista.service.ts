import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialista } from '../../models/especialista.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EspecialistaService {
  private apiUrl = `${environment.apiUrl}/especialistas`;

  constructor(private http: HttpClient) {}

  getEspecialistas(): Observable<Especialista[]> {
    return this.http.get<Especialista[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const url = '/stop';

@Injectable({
  providedIn: 'root'
})
export class ApiMyttcService {

  constructor(private http: HttpClient) {
  }

  getAllRoute(id: string): Observable<Object> {
    return this.http.get<Object>(`${url}/${id}.json`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}

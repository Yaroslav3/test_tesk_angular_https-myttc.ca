import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Station} from '../model/station.model';

const url = '/stop';


@Injectable({
  providedIn: 'root'
})
export class RouteService {


  constructor(private http: HttpClient) {
  }


  getAllRoute(id: string): Observable<Station> {
    return this.http.get<Station>(`${url}/${id}.json`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}

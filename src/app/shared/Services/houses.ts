import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../interfaces/house';

@Injectable({ providedIn: 'root' })
export class HousesService  {
  private url = '/assets/houses.json';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.url);
  }
}

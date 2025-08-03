import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subject, tap } from 'rxjs';
import { House } from '../interfaces/house';

@Injectable({ providedIn: 'root' })
export class HousesService  {
  private url = 'http://localhost:3000/Houses'; // URL to web API
  house$ = new Subject<House[]>();
  interval$ = interval(1000);

  constructor(private http: HttpClient) {}

  getHouses(query: string = ''): Observable<House[]> {
    const searchUrl = query ? `${this.url}?q=${query}` : this.url;
    return this.http.get<House[]>(searchUrl).pipe(
      tap(houses => {
        this.house$.next(houses);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, debounceTime, distinctUntilChanged, interval, map, Observable, ReplaySubject, startWith, Subject, switchMap, tap } from 'rxjs';
import { House } from '../interfaces/house';
import { FormControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class HousesApiService {
  private url = 'http://localhost:3000/housesall';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.url);
  }
}
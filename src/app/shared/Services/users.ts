import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subject, tap } from 'rxjs';
import { House } from '../interfaces/house';

@Injectable({ providedIn: 'root' })
export class HousesService  {
  private url = 'http://localhost:3000/users'; // URL to web API
  interval$ = interval(1000);

  constructor(private http: HttpClient) {}

    getUsers(){
        return this.http.get(this.url).pipe(
            tap(
                users => console.log('Users fetched:', users),
                error => console.error('Error fetching users:', error)
            )
        )
    }
}

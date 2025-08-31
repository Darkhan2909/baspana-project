import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subject, tap } from 'rxjs';
import { House } from '../interfaces/house';

@Injectable({ providedIn: 'root' })
export class UsersService  {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

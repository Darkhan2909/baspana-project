import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/Services/users';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  users: any[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    // вот тут идет subscribe 👇
    this.usersService.getUsers()
    .pipe(takeUntilDestroyed())
    .subscribe((data) => {
      this.users = data;
      console.log('Данные пришли:', data);
    });
  }
}

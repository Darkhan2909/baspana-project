import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/Services/users';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  users: any[] = [];
  private destroyRef = inject(DestroyRef); 
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    // вот тут идет subscribe 👇
    this.usersService.getUsers()
    .pipe(takeUntilDestroyed(this.destroyRef)) // автоматически отписываемся при уничтожении компонента
    .subscribe((data) => {
      this.users = data;
      console.log('Данные пришли:', data);
    });
  }
}

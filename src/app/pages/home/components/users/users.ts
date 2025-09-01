import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../../shared/Services/users';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import * as UsersActions from '../../../../shared/store/users/users.actions';
import { selectAllUsers, selectUsersLoading } from '../../../../shared/store/users/users.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
[x: string]: any;
  private store = inject(Store);

  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectUsersLoading);

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers());
  }
}

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../../shared/Services/users';
import * as UsersActions from './users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  actions$ = inject(Actions);
  usersService = inject(UsersService);
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map(users => UsersActions.loadUsersSuccess({ users })),
          catchError(error => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

}

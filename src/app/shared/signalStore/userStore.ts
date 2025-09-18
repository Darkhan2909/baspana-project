// users.store.ts
import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { UsersService } from '../Services/users';
import { Users } from '../../pages/home/components/users/users';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface UsersState {
  users: any[];
  loading: boolean;
  error: string | null;
}

export const UsersStore = signalStore(
  { providedIn: 'root' },

  // начальное состояние
  withState<UsersState>({
    users: [],
    loading: false,
    error: null,
  }),

  // методы для работы со стором
  withMethods((store) => {
    const usersService = inject(UsersService);

    return {
      // загрузка пользователей
      loadUsers: async () => {
        patchState(store, { loading: true, error: null });

        try {
          const data = await usersService.getUsers().toPromise();
          patchState(store, { users: data, loading: false });
        } catch (err: any) {
          patchState(store, { error: err.message || 'Ошибка загрузки', loading: false });
        }
      },
    };
  }),
  withMethods((store, usersService = inject(UsersService)) => ({
    loadUsers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => usersService.getUsers().pipe(
          tap({
            next: (users) => patchState(store, { users,  loading: false }),
            error: (err) => patchState(store, { error: err.message || 'Ошибка загрузки', loading: false }),
          })
        )),
      ),
    )
  })
));

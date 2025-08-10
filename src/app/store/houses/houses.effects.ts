import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HousesActions from './houses.actions';
import { catchError, debounceTime, map, of, switchMap } from 'rxjs';
import { HousesApiService } from '../../shared/Services/houses';
import { House } from '../../shared/interfaces/house';

@Injectable()
export class HousesEffects {
  constructor(private actions$: Actions, private api: HousesApiService) {}

  loadHouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HousesActions.loadHouses),
      debounceTime(300),
      switchMap(({ query }) =>
        this.api.getHouses().pipe(
          map(houses => this.filterHouses(houses, query)),
          map(filtered => HousesActions.loadHousesSuccess({ houses: filtered })),
          catchError(error => of(HousesActions.loadHousesFailure({ error })))
        )
      )
    )
  );

  private filterHouses(houses: House[], query?: string): House[] {
    if (!query) return houses;
    const lowerQuery = query.toLowerCase();
    return houses.filter(
      h =>
        h.name.toLowerCase().includes(lowerQuery) ||
        h.address.toLowerCase().includes(lowerQuery)
    );
  }
}

import { createAction, props } from '@ngrx/store';
import { House } from '../../shared/interfaces/house';

export const loadHouses = createAction('[Houses] Load Houses', props<{ query?: string }>());
export const loadHousesSuccess = createAction('[Houses] Load Houses Success', props<{ houses: House[] }>());
export const loadHousesFailure = createAction('[Houses] Load Houses Failure', props<{ error: any }>());

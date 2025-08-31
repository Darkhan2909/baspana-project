import { createReducer, on } from '@ngrx/store';
import * as HousesActions from './houses.actions';
import { House } from '../../shared/interfaces/house';

export interface HousesState {
  houses: House[];
  loading: boolean;
  error: any | null;
  query: string;
}

export const initialHousesState: HousesState = {
  houses: [],
  loading: false,
  error: null,
  query: ''
};

export const housesReducer = createReducer(
  initialHousesState,
  on(HousesActions.loadHouses, (state, { query }) => ({
    ...state,
    loading: true,
    query: query ?? '',
    error: null
  })),
  on(HousesActions.loadHousesSuccess, (state, { houses }) => ({
    ...state,
    loading: false,
    houses
  })),
  on(HousesActions.loadHousesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HousesState } from './houses.reducer';

export const selectHousesFeature = createFeatureSelector<HousesState>('houses');

export const selectAllHouses = createSelector(selectHousesFeature, state => state?.houses);
export const selectHousesLoading = createSelector(selectHousesFeature, state => state?.loading);
export const selectHousesError = createSelector(selectHousesFeature, state => state?.error);
export const selectHousesQuery = createSelector(selectHousesFeature, state => state?.query);

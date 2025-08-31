import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { housesReducer } from './store/houses/houses.reducer';
import { provideEffects } from '@ngrx/effects';
import { HousesEffects } from './store/houses/houses.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ houses: housesReducer }),
    provideEffects([HousesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};

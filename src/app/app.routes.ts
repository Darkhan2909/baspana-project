import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SearchPool } from './pages/search-pool/search-pool';

export const routes: Routes = [
    {path: '',component:Home, pathMatch: 'full'},
    {path: 'app-search-pool', component: SearchPool, pathMatch: 'full'}
];

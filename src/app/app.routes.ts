import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SearchPool } from './pages/search-pool/search-pool';
import { AuthGuard } from './shared/guards/auth.guard';
export const routes: Routes = [
    // {
    //     path: '', component:Home, pathMatch: 'full'
    // },
    // {
    //     path: 'app-search-pool', component: SearchPool, pathMatch: 'full'
    // },
    {
        path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), pathMatch: 'full'
    },
    {
        path: 'app-search-pool', loadComponent: () => import('./pages/search-pool/search-pool').then(m => m.SearchPool), pathMatch: 'full'
    },
    {
        path: 'app-programms',
        canMatch: [AuthGuard],  
        loadComponent: () => import('./pages/programms/programms').then(m => m.Programms), pathMatch: 'full'
    }
];

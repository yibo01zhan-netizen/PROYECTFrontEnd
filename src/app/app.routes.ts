import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CreateProducts } from './pages/create-products/create-products';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { authGuardGuard } from './Guards/auth-guard-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'registro',
        component: Registro
    },
    {
        path: 'create-products',
        canActivate: [authGuardGuard],
        loadComponent: () => import('./pages/create-products/create-products').then(m => m.CreateProducts)

    },
    {
        path: 'create-products/:id',
        component: CreateProducts
    },
    {
        path: '**',
        redirectTo: ''
    }
];

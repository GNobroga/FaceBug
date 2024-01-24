import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/account/pages/login/login.component'),
    children: [
      {
        path: 'register',
        loadComponent: () => import('./components/account/pages/register/register.component'),
      }
    ],
  },
  {
    path: 'home',
    loadComponent: () => import('./components/main/pages/home/home.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

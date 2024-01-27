import { Routes } from '@angular/router';
import RegisterComponent from 'pages/account/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/account/login/login.component'),
    children: [
      {
        path: '',
        component: RegisterComponent
      }
    ],
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/principal/home/home.component'),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

import { Routes } from '@angular/router';
import RegisterComponent from 'pages/account/register/register.component';

export const routes: Routes = [
  {
    path: 'account',
    loadComponent: () => import('./pages/account/login/login.component'),
    children: [
      {
        path: 'create',
        component: RegisterComponent
      }
    ],
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/principal/home/home.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account'
  }
];

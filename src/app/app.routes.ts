import { Routes } from '@angular/router';
import RegisterComponent from 'components/account/pages/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/account/pages/login/login.component'),
    children: [
      {
        path: 'register',
        component: RegisterComponent
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

import { Routes } from '@angular/router';
import CommentModelComponent from '@principal-components/comment-model/comment-model.component';
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
    path: '',
    loadComponent: () => import('./pages/principal/home/home.component'),
    children: [
      {
        path: 'post/:id',
        component: CommentModelComponent,
      }
    ]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component'),
  },
  {
    path: 'notificacoes',
    loadComponent: () => import('./pages/notifications/notifications.component'),
    title: 'Notificações',
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

import { Routes } from '@angular/router';
import CommentModelComponent from '@principal-components/comment-model/comment-model.component';
import { PerfilComponent } from 'modules/profile/perfil/perfil.component';
import { SearchFriendsComponent } from 'modules/profile/search-friends/search-friends.component';
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
        path: 'posts/:id',
        component: CommentModelComponent,
        data: {
          returnUrl: '/',
        }
      }
    ]
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/profile/profile.component'),
    children: [
      {
        path: '',
        component: PerfilComponent,
        children: [
          {
            path: 'posts/:id',
            component: CommentModelComponent,
            data: {
              returnUrl: '/perfil',
            }
          }
        ]
      },
      {
        path: 'amigos',
        component: SearchFriendsComponent,
      }
    ]
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

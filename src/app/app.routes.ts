import { Routes } from '@angular/router';
import CommentModelComponent from '@principal-components/comment-model/comment-model.component';
import { MenuUploadComponent } from 'modules/profile/menu-upload/menu-upload.component';
import { PerfilComponent } from 'modules/profile/perfil/perfil.component';
import { PhotoGalleryComponent } from 'modules/profile/photo-gallery/photo-gallery.component';
import { SearchFriendsComponent } from 'modules/profile/search-friends/search-friends.component';
import { VideoGalleryComponent } from 'modules/profile/video-gallery/video-gallery.component';
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
          },
          {
            path: 'upload',
            component: MenuUploadComponent,
          },
        ]
      },
      {
        path: 'amigos',
        component: SearchFriendsComponent,
      },
      {
        path: 'fotos',
        component: PhotoGalleryComponent,
      },
      {
        path: 'videos',
        component: VideoGalleryComponent,
      },
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

import { Component } from '@angular/core';
import SidebarListComponent, { ISidebarItem } from './sidebar-list/sidebar-list.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarFirstAreaItems: ISidebarItem[] = [
    {
      imageSource: '/assets/icons/sidebar/icons.png',
      position: {
        x: 0,
        y: -38
      },
      label: 'Grupos',
    },
    {
      imageSource: '/assets/icons/sidebar/icons.png',
      position: {
        x: 0,
        y: -304
      },
      label: 'Amigos',
    },
    {
      imageSource: '/assets/icons/sidebar/icons.png',
      position: {
        x: 0,
        y: -456
      },
      label: 'Memórias',
    },
    {
      imageSource: '/assets/icons/sidebar/icons.png',
      position: {
        x: 0,
        y: -190
      },
      label: 'Guardado',
    },
    {
      imageSource: '/assets/icons/sidebar/icons.png',
      position: {
        x: 0,
        y: -532
      },
      label: 'Video',
    },
  ]
}

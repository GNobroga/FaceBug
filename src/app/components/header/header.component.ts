import { Component } from '@angular/core';
import NavListComponent, { INavMenu } from './nav-list/nav-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navigations: INavMenu[] = [
    {
      imageSource: 'assets/icons/header/home.svg',
      imageAlt: 'Home'
    },
    {
      imageSource: 'assets/icons/header/pages.svg',
      imageAlt: 'Pages'
    },
    {
      imageSource: 'assets/icons/header/video.svg',
      imageAlt: 'Video'
    },
    {
      imageSource: 'assets/icons/header/marketplace.svg',
      imageAlt: 'Marketplace'
    },
    {
      imageSource: 'assets/icons/header/groups.svg',
      imageAlt: 'Groups'
    }
  ];
}

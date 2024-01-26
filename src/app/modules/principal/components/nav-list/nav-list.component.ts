import { Component, Input } from '@angular/core';
import NavItemComponent from '../nav-item/nav-item.component';

export interface INavMenu {
  imageSource: string;
  imageAlt: string;
}

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export default class NavListComponent {

  @Input() menus: INavMenu[] = [];
}

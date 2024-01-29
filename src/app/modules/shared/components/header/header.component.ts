import { Component,  EventEmitter,  OnInit, Output,  inject, signal } from '@angular/core';
import { INavMenu } from '../nav-list/nav-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
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


  @Output()
  onShowSidebar = new EventEmitter();

  openAccountMenu = signal(false);

  openMessagerMenu = signal(false);

  openNotificationMenu = signal(false);

  #route = inject(ActivatedRoute);

  isNotificationRoute = signal(this.#route.snapshot.title === 'Notificações');

  toggleAccountMenu() {
    if (this.openAccountMenu()) {
      this.clearMenus();
    } else {
      this.clearMenus();
      this.openAccountMenu.set(true);
    }
  }

  toggleMessagerMenu() {
    if (this.openMessagerMenu()) {
      this.clearMenus();
    } else {
      this.clearMenus();
      this.openMessagerMenu.set(true);
    }
  }

  toggleNotificationMenu() {
    if (this.openNotificationMenu()) {
      this.clearMenus();
    } else {
      this.clearMenus();
      this.openNotificationMenu.set(true);
    }
  }

  toggleShowSidebar() {
    this.onShowSidebar.emit();
  }

  clearMenus() {
    this.openAccountMenu.set(false);
    this.openMessagerMenu.set(false);
    this.openNotificationMenu.set(false);
  }


}

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Configurações',
      styleClass: 'tw-bg-transparent'
    }
  ]
}

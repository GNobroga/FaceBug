import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {

  toggleDisplayTheme() {
    document.documentElement.classList.toggle('light');
    document.body.classList.toggle('light');
  }
}

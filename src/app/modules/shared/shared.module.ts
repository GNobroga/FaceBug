import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component.';
import NavItemComponent from './components/nav-item/nav-item.component';
import NavListComponent from './components/nav-list/nav-list.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderMessageMenuComponent } from './components/header-message-menu/header-message-menu.component';
import { HeaderMessageItemComponent } from './components/header-message-item/header-message-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { AutoFocusModule } from 'primeng/autofocus';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationMenuComponent } from './components/notification-menu/notification-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent,
    HeaderMessageMenuComponent,
    HeaderMessageItemComponent,
    NotificationItemComponent,
    NotificationMenuComponent
  ],
  imports: [
    MenubarModule,
    InputTextModule,
    AutoFocusModule
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent
  ]
})
export default class SharedModule {

}

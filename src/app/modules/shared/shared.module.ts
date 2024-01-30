import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component.';
import NavItemComponent from './components/nav-item/nav-item.component';
import NavListComponent from './components/nav-list/nav-list.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderMessageMenuComponent } from './components/header-message-menu/header-message-menu.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { AutoFocusModule } from 'primeng/autofocus';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationMenuComponent } from './components/notification-menu/notification-menu.component';
import { ShowLikeModalComponent } from './components/show-like-modal/show-like-modal.component';
import { TabViewModule } from 'primeng/tabview';
import { ShowLikeModalItemComponent } from './components/show-like-modal/show-like-modal-item/show-like-modal-item.component';
import { ChatMessagerComponent } from 'modules/chat/components/chat-messager/chat-messager.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent,
    HeaderMessageMenuComponent,
    MessageItemComponent,
    NotificationItemComponent,
    NotificationMenuComponent,
    ShowLikeModalComponent,
    ShowLikeModalItemComponent,
  ],
  imports: [
    MenubarModule,
    InputTextModule,
    AutoFocusModule,
    TabViewModule,
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent,
    NotificationItemComponent,
    NotificationMenuComponent,
    ShowLikeModalComponent,
    MessageItemComponent
  ]
})
export default class SharedModule {

}

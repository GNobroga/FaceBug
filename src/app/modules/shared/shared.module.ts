import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component.';
import NavItemComponent from './components/nav-item/nav-item.component';
import NavListComponent from './components/nav-list/nav-list.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent
  ],
  imports: [
    MenubarModule
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

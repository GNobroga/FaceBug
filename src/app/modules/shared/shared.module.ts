import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component.';
import NavItemComponent from './components/nav-item/nav-item.component';
import NavListComponent from './components/nav-list/nav-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    NavItemComponent,
    NavListComponent
  ]
})
export default class SharedModule {

}

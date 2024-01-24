import { Component } from '@angular/core';
import { ContentComponent } from 'components/content/content.component';
import { HeaderComponent } from 'components/header/header.component';
import { SidebarComponent } from 'components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}

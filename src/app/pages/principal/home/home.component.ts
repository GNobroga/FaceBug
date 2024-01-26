import { Component } from '@angular/core';
import PrincipalModule from 'modules/principal/principal.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}

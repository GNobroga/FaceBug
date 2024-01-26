import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import PrincipalModule from 'modules/principal/principal.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalModule, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  showSidebar = signal(false);
}

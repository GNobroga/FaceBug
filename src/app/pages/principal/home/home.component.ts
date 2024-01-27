import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PrincipalModule from 'modules/principal/principal.module';
import SharedModule from 'modules/shared/shared.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalModule, NgClass, SharedModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  showSidebar = signal(false);
}

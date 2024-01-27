import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export default class NavItemComponent {

  @Input({ required: true }) imageSource!: string;
  @Input({ required: true }) imageAlt!: string;
}

import { Component, Input } from '@angular/core';
import SidebarItem from '../sidebar-item/sidebar-item.component';

export interface ISidebarItem {
  imageSource: string;
  position: {
    x: number;
    y: number;
  },
  label: string;
}

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
  imports: [SidebarItem],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss'
})
export default class SidebarListComponent {

  @Input() items: ISidebarItem[] = [];
}

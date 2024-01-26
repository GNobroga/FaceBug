import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ISidebarItem } from "../sidebar-list/sidebar-list.component";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SidebarItem {

  @Input({ required: true }) item!: ISidebarItem;

  public getStyle() {
    const { imageSource: img, position } = this.item;
    return { backgroundImage: `url(${img})`, backgroundPosition: `${position.x}px ${position.y}px`};
  }
}

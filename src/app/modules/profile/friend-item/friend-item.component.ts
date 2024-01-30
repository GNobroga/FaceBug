import { style } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import fadeInAnimation from 'animations/fadeInAnimation';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrl: './friend-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ fadeInAnimation ],
})
export class FriendItemComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Excluir',
      icon: 'pi pi-times',
    },
    {
      label: 'Bloquear',
      icon: 'pi pi-trash',
    },
    {
      label: 'Conversar',
      icon: 'pi pi-user',
    },
  ]
}

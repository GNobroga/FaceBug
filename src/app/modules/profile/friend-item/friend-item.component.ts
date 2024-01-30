import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeInOutAnimation } from 'animations/fastFadeInOutAnimation';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrl: './friend-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ fadeInOutAnimation ],
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

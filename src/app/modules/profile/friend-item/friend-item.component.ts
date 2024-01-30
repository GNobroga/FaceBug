import { ChangeDetectionStrategy, Component } from '@angular/core';
import fadeInAnimation from 'animations/fadeInAnimation';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrl: './friend-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ fadeInAnimation ],
})
export class FriendItemComponent {

}

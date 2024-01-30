import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeInOutAnimation } from 'animations';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOutAnimation]
})
export class FriendComponent {

}

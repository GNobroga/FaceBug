import { ChangeDetectionStrategy, Component } from '@angular/core';
import SharedModule from 'modules/shared/shared.module';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NotificationsComponent {

}

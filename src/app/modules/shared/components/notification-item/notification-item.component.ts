import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationItemComponent {

  @Input()
  isLike = false;
  @Input()
  isLoved = false;

  @Input()
  isChecked = false;

  changeChecked() {
    this.isChecked = true;
  }
}

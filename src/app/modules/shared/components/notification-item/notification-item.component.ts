import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  #route = inject(ActivatedRoute);

  isNotificationRoute = signal(this.#route.snapshot.title === 'Notificações');


  changeChecked() {
    this.isChecked = true;
  }
}

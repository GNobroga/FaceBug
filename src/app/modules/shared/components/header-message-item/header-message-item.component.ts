import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-message-item',
  templateUrl: './header-message-item.component.html',
  styleUrl: './header-message-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMessageItemComponent {

}

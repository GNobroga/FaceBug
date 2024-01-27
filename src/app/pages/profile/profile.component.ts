import { ChangeDetectionStrategy, Component } from '@angular/core';
import SharedModule from 'modules/shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProfileComponent {

}

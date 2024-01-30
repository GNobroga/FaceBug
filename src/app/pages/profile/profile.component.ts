import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileModule } from 'modules/profile/profile.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileModule, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProfileComponent {

}

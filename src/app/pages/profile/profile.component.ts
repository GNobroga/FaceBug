import { ChangeDetectionStrategy, Component } from '@angular/core';
import PrincipalModule from 'modules/principal/principal.module';
import { ProfileModule } from 'modules/profile/profile.module';
import SharedModule from 'modules/shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule, ProfileModule, PrincipalModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProfileComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeInOutAnimation } from 'animations';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOutAnimation]
})
export class PhotoComponent {

}

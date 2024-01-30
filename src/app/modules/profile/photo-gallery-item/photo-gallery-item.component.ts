import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery-item',
  templateUrl: './photo-gallery-item.component.html',
  styleUrl: './photo-gallery-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryItemComponent {

}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoGalleryComponent {

  @Input()
  title: string = 'Vídeos';
}

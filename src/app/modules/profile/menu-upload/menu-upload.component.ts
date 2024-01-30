import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { zoomIn } from 'animations';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-menu-upload',
  templateUrl: './menu-upload.component.html',
  styleUrl: './menu-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [zoomIn]
})
export class MenuUploadComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  #sanitizer = inject(DomSanitizer);


  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.#sanitizer.bypassSecurityTrustUrl(<any> event.objectUrl);
    // event.blob can be used to upload the cropped image
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }
}

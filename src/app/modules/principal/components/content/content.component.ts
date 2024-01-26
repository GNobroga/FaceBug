import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  openPostModal = signal(false);

  togglePostModal() {
    this.openPostModal.set(!this.openPostModal());
  }
}

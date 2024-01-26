import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.scss'
})
export class CommentBoxComponent {

  @Output("onMenuOpen")
  menuOpen = new EventEmitter(false);

  openMenuPost() {
    this.menuOpen.emit();
  }
}

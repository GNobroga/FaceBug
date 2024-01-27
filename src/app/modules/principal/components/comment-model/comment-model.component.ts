import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment-model',
  templateUrl: './comment-model.component.html',
  styleUrl: './comment-model.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentModelComponent {

  @Output()
  onClose = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}

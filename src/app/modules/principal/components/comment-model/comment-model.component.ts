import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-comment-model',
  templateUrl: './comment-model.component.html',
  styleUrl: './comment-model.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CommentModelComponent {

}

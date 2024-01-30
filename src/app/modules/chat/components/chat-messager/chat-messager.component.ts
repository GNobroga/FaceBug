import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chat-messager',
  templateUrl: './chat-messager.component.html',
  styleUrl: './chat-messager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessagerComponent {

}

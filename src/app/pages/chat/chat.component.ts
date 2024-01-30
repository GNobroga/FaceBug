import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChatModule } from 'modules/chat/chat.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {

}

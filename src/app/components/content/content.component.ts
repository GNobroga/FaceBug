import { Component } from '@angular/core';
import { FeedComponent } from 'components/feed/feed.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}

import { Component } from '@angular/core';
import { FeedComponent } from 'components/feed/feed.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FeedComponent, CommentBoxComponent, PostsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}

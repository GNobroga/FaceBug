import { Component, signal } from '@angular/core';
import { FeedComponent } from 'components/feed/feed.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from 'components/create-post/create-post.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FeedComponent, CommentBoxComponent, PostsComponent, CreatePostComponent, AsyncPipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  openPostModal = signal(false);

  togglePostModal() {
    this.openPostModal.set(!this.openPostModal());
  }
}

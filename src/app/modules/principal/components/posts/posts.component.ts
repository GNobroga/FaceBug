import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  countPosts = Array.from({ length: 10 }, () => null );

  @Input({ required: true })
  link!: string;
}

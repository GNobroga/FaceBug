import { Component, Input, OnInit, signal } from '@angular/core';
import { fadeInOutAnimation } from 'animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  animations: [fadeInOutAnimation]
})
export class PostComponent implements OnInit {

  isLoading = signal(true);

  @Input({ required: true })
  link!: string;

  openLikeMenu = signal(false);

  ngOnInit() {
    setTimeout(() => this.isLoading.set(false), 500);
  }

}

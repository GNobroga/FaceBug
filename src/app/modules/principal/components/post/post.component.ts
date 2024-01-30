import { Component, Input, OnInit, signal } from '@angular/core';
import fadeInAnimation from 'animations/fadeInAnimation';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  animations: [fadeInAnimation]
})
export class PostComponent implements OnInit {

  isLoading = signal(true);

  @Input({ required: true })
  link!: string;

  ngOnInit() {
    setTimeout(() => this.isLoading.set(false), 500);
  }

}

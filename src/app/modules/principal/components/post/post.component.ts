import { Component, OnInit, signal } from '@angular/core';
import fadeInAnimation from 'animations/fadeInAnimation';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  animations: [fadeInAnimation]
})
export class PostComponent implements OnInit {

  isLoading = true;

  ngOnInit() {
    setTimeout(() => this.isLoading = false, 1000);
  }

}

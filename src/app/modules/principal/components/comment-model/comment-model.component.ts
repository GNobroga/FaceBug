import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-model',
  templateUrl: './comment-model.component.html',
  styleUrl: './comment-model.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommentModelComponent implements OnInit {

  #route = inject(ActivatedRoute);

  returnUrl = signal('/');

  ngOnInit(): void {
    this.returnUrl.set(this.#route.snapshot.data['returnUrl']);
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-show-like-modal',
  templateUrl: './show-like-modal.component.html',
  styleUrl: './show-like-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style]': 'styles'
  }
})
export class ShowLikeModalComponent {
  styles = { display: 'flex' }

  close() {
    this.styles = { display: 'none' };
  }
}

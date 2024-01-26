import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements AfterViewInit {


  @ViewChild("feed") feedRef!: ElementRef;

  feed = signal({} as HTMLElement);

  feedMoveLeftShow = signal(false);

  currentScrollPositionX = 300;

  public ngAfterViewInit() {
    const feed = this.feedRef.nativeElement as HTMLElement;
    feed.scroll({ behavior: 'smooth' });
    this.feed.set(feed);
  }

  public moveScroll(direction: 'left' | 'right') {
    this.feedMoveLeftShow.set(true);

    if (direction === 'right') {
      this.feed().scrollBy({
        left: this.currentScrollPositionX
      });
    } else {
      this.feed().scrollBy({
        left: -this.currentScrollPositionX
      });

      if (this.feed().scrollLeft <= this.currentScrollPositionX) {
        this.feedMoveLeftShow.set(false);
      }
    }
  }
}

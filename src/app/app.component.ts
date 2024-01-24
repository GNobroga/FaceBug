import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import IApplicationState from 'types/IApplicationState';
import * as counterActions from '@store/counter.actions';import { HeaderComponent } from 'components/header/header.component';
import { SidebarComponent } from 'components/sidebar/sidebar.component';
import { ContentComponent } from 'components/content/content.component';
;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #store = inject(Store<IApplicationState>);

  login$ = this.#store.select('login');

  increment() {
    this.#store.dispatch(counterActions.increment());
  }

  decrement() {
    this.#store.dispatch(counterActions.decrement());
  }

  reset() {
    this.#store.dispatch(counterActions.reset());
  }
}

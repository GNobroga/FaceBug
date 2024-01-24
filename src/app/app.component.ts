import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import IApplicationState from 'types/IApplicationState';
import * as counterActions from '@store/counter.actions';import { HeaderComponent } from 'components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet/>'
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

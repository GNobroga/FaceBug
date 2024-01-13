import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import IApplicationState from 'types/IApplicationState';
import * as counterActions from '@store/counter.actions';
import ShowCountComponent from 'show-count/show-count.component';
import { LoginFormComponent } from 'login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShowCountComponent, LoginFormComponent],
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

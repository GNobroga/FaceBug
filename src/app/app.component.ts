import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import counterReducer from '@store/counter.reducer';
import { Observable } from 'rxjs';
import IApplicationState from 'types/IApplicationState';
import * as counterActions from '@store/counter.actions';
import ShowCountComponent from 'show-count/show-count.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShowCountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  #store = inject(Store<IApplicationState>)
  
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

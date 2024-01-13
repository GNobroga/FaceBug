import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import IApplicationState from 'types/IApplicationState';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'show-count',
  template: `<h1>{{ count$ | async  }}</h1>`
})
export default class ShowCountComponent {

  #store = inject(Store<IApplicationState>);

  count$ = this.#store.select('count');
}

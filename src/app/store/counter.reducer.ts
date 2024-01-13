import { createReducer, on } from "@ngrx/store";
import * as counterActions from '@store/counter.actions';

const counter = 0;

const counterReducer = createReducer(counter,
  on(counterActions.increment, (state) => state + 1),
  on(counterActions.decrement, (state) => state - 1),
  on(counterActions.reset, (state) => 0)
);

export default counterReducer;

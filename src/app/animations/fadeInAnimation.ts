import { animate, keyframes,  style, transition, trigger } from '@angular/animations';

export default trigger('fadeIn', [
  transition(':enter', animate('1s', keyframes([
    style({
      opacity: 0
    }),
    style({
      opacity: 0.5
    }),
    style({
      opacity: 1
    }),
  ]))),
]);

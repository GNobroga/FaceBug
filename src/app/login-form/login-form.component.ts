import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import LoginState from 'types/LoginState';
import * as loginActions from '@store/login.actions';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  #store = inject(Store)

  public send(login: LoginState) {
    this.#store.dispatch(loginActions.login(login));
  }
}

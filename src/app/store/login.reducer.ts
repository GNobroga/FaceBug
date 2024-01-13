import { createReducer, on } from "@ngrx/store";
import * as loginActions from '@store/login.actions';
import LoginState from "types/LoginState";

const initialState: LoginState = {
  username: null,
  password: null,
};

export const loginReducer = createReducer(initialState,
on(loginActions.login, (state, { username, password }) => ({ username, password }) ) )

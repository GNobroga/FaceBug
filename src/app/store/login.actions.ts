import { createAction, props } from "@ngrx/store";
import LoginState from "types/LoginState";

export const login = createAction(
  '[Login] Login',
  props<LoginState>()
)

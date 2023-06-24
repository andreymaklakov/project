import { UserSchema } from "entitiess/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  user: UserSchema;
  login: LoginSchema;
}

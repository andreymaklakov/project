import { CounterSchema } from "entitiess/Counter";
import { UserSchema } from "entitiess/User";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}

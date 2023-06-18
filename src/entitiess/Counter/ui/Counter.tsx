/* eslint-disable i18next/no-literal-string */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

import { Button } from "shared/ui/Button/Button";

export const Counter: FC = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value-title">{value}</h1>

      <Button data-testid="counter-increment-btn" onClick={handleIncrement}>
        Increment
      </Button>

      <Button data-testid="counter-decrement-btn" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

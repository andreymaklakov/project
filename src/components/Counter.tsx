import { FC, useState } from "react";

import styles from "./Counter.module.scss";

export const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1 className={styles.h1}>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

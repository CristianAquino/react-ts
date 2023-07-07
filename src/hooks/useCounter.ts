import { useState } from "react";

const useCounter = (initial: number = 0) => {
  const [counter, setcounter] = useState<number>(initial);

  const increment = () => {
    setcounter(counter + 1);
  };

  const reset = () => {
    setcounter(initial);
  };

  return [counter, increment, reset] as const;
};
export default useCounter;

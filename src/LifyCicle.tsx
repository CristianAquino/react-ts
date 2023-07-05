import { useEffect, useState } from "react";
console.log("pre Renders");

const LifyCicle = () => {
  console.log("logic render");
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect no dependency");

    return () => {
      console.log("cleanup useEffect no dependency");
    };
  });

  useEffect(() => {
    console.log("useEffect dependency []");

    return () => {
      console.log("cleanup useEffect dependency []");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect C1");

    return () => {
      console.log("useEffect C1");
    };
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect C1 - C2");

    return () => {
      console.log("useEffect C1 - C2");
    };
  }, [counter1, counter2]);

  return (
    <div>
      {console.log("return render")}
      <h1>Clicks C1: {counter1}</h1>
      <h1>Clicks C2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment C1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment C2</button>
    </div>
  );
};
export default LifyCicle;

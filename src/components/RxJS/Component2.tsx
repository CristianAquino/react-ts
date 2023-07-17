// para este ejemplo este es el componente
// que recive la informacion
import { useEffect, useState } from "react";
import { sharinInformationServices } from "../../services";

const Component2 = () => {
  const [count, setCount] = useState(0);

  const subscription = sharinInformationServices.getSubject();

  useEffect(() => {
    subscription.subscribe((data) => {
      if (!!data) setCount((prev) => prev + 1);
    });
  }, []);

  return <div>{count}</div>;
};
export default Component2;

import { useState } from "react";
import Card from "./Card";

const LoadingApp = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "hiden" : "show"}</button>
      {show && <Card />}
    </div>
  );
};
export default LoadingApp;

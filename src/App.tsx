import { useState } from "react";
// import FetchCard from "./FetchCard";
import LifyCicle from "./LifyCicle";
import ResizeApp from "./ResizeApp";

const App = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      {/* <FetchCard /> */}
      {show && <LifyCicle />}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};
export default App;

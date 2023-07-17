import { useState } from "react";
import { Component1, Component2 } from "./components";

const App = () => {
  const [stado, setState] = useState(true);
  return (
    <div>
      <h2>App</h2>
      <button onClick={() => setState(false)}>Rick</button>
      <button onClick={() => setState(true)}>Morty</button>
      {stado ? <Component1 key="c1" /> : <Component2 key="c2" />}
    </div>
  );
};
export default App;

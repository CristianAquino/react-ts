import { useState, useDeferredValue } from "react";
import List from "./List";

const App = () => {
  const [text, setText] = useState("");
  const query = useDeferredValue(text);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <List input={query} />
    </>
  );
};
export default App;

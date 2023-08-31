import { Suspense, useDeferredValue, useState } from "react";
import { PostList } from "..";

export type DeferedHookProps = {};

const DeferedHook = ({}: DeferedHookProps) => {
  const [data, setData] = useState("");
  const deferedData = useDeferredValue(data);
  const nuevo = data !== deferedData;

  return (
    <div>
      <h1>DeferedHook</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        autoFocus
      />
      <Suspense fallback={<h1>Loading...</h1>}>
        <div style={{ background: nuevo ? "#f00" : "#000" }}>
          <PostList id={deferedData} />
        </div>
      </Suspense>
    </div>
  );
};

export default DeferedHook;

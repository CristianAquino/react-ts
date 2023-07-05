import { useEffect, useRef, useState } from "react";

const RenderApp = () => {
  const [text, settext] = useState<string>("");
  const rendersRef = useRef(1);
  //   ref = 1
  //   ref = 2

  //   entra como ref = 1
  //   entra como ref = 2
  useEffect(() => {
    rendersRef.current++;
    // sale como ref = 2
    // sale como ref = 3
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      {/* ref = 1 */}
      {/* ref = 2 */}
      <h1>Renders: {rendersRef.current}</h1>
    </div>
  );
};
export default RenderApp;

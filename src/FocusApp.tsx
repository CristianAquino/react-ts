import { useRef, useState } from "react";

type currentRef = HTMLInputElement;

const FocusApp = () => {
  const [text, settext] = useState<string>("");
  const inputRef = useRef<currentRef>({} as currentRef);

  const handleFocus = () => {
    const input = inputRef.current;
    // accion no recomendada xq el estado no se modifica
    // input.value = "hello";

    input.focus();
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};
export default FocusApp;

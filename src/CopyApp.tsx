import { useRef, useState } from "react";

type inputCurrent = HTMLInputElement;

const CopyApp = () => {
  const [text, settext] = useState<string>("");
  const [message, setMessage] = useState<boolean>(false);
  const inputRef = useRef<inputCurrent>({} as inputCurrent);

  // referencia para ralizar el copy
  // https://midu.dev/leer-copiar-pegar-portapapeles-javascript/
  const handleCopy = () => {
    const input = inputRef.current;
    navigator.clipboard
      .writeText(input.value)
      .then(() => {
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(`Error al realizar la copia al portapapeles ${err}`);
      });
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      {message && <p>Texto copiado</p>}
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};
export default CopyApp;

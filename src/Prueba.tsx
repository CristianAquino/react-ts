import { useRef } from "react";

const Prueba = () => {
  // tipo mas especifico para un tag DIV
  // si no estamos seguros de que es un DIV, usamos el tipo Element
  const ref1 = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={ref1}>Div 1</div>
      <button
        onClick={() => {
          if (ref1.current) ref1.current.style.backgroundColor = "red";
        }}
      >
        Cambiar fondo 1
      </button>
    </>
  );
};
export default Prueba;

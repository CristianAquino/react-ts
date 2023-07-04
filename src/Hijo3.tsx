import { useEdad } from "./edadContext";

const Hijo3 = () => {
  const { edad, setEdad } = useEdad();
  return (
    <div>
      <h2>Hijo3</h2>
      <p>Edad es: {edad}</p>
      <button onClick={() => setEdad(edad + 1)}>Aumentar +1</button>
    </div>
  );
};
export default Hijo3;

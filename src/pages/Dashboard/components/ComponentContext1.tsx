import { useDashboardContext } from "../context/Dashboard.context";

const ComponentContext1 = () => {
  const { setData } = useDashboardContext();

  return (
    <div>
      <button onClick={() => setData("Hola desde context 1")}>
        Enviar informacion por Context
      </button>
    </div>
  );
};
export default ComponentContext1;

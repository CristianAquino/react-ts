import { useDashboardContext } from "../context/Dashboard.context";

const ComponentContext2 = () => {
  const { data } = useDashboardContext();
  return (
    <div>
      Se recivio de ComponentContext1 {data} y se envio a ComponentContext2
    </div>
  );
};
export default ComponentContext2;

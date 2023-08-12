import { useEffect, useState } from "react";
import { ComponentTestAsync } from "./components/ComponentTestAsync";

const App = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setName("Juan");
    }, 4000);
  }, []);

  return (
    <div>
      {/* <ErrorBoundary fallbackComponent={<>NO ANDA!!</>} resetCondition={name}>
        <ComponentTest name={name} />
      </ErrorBoundary> */}
      <ComponentTestAsync />
    </div>
  );
};
export default App;

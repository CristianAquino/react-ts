import Hijo1 from "./Hijo1";
import EdadProvider from "./edadContext";

const App = () => {
  return (
    <div>
      <EdadProvider>
        <Hijo1 />
      </EdadProvider>
    </div>
  );
};
export default App;

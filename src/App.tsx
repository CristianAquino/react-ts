import { Provider } from "react-redux";
import { Component1, Component2, ComponentRedux1 } from "./components";
import Dashboard from "./pages/Dashboard/Dashboard";
import { store } from "./redux/store";
import { ComponentRedux2 } from "./pages/Dashboard/components";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h2>RxJS</h2>
        <Component1 />
        <Component2 />
        <h2>Context</h2>
        <Dashboard />
        <h2>Redux</h2>
        <ComponentRedux1 />
        <ComponentRedux2 />
      </Provider>
    </div>
  );
};
export default App;

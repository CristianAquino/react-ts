import FilterableProductTable from "./FilterableProductTable";
import data from "./data.json";

function App() {
  return <FilterableProductTable products={data} />;
}

export default App;

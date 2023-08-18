import { Suspense, lazy, useState } from "react";
import {
  ComponentPolymorphic,
  HOC,
  PracticeHForm,
  ScrollSnap,
  StarRating,
} from "./components";
import { AxiosInterceptor } from "./interceptors";
import { Principal } from "./styles";
// import { FilterProducts } from "./pages";
import { FiltersProvider } from "./context";
const FilterProducts = lazy(
  () => import("./pages/FilterProducts/FilterProducts")
);
// lazy(() => import("./components/Filters"));

AxiosInterceptor();

const App = () => {
  // const [score, setScore] = useState(4);

  return (
    <Principal>
      {/* <ScrollSnap /> */}
      {/* <StarRating rating={score} setRating={setScore} /> */}
      {/* <PracticeHForm /> */}
      {/* <ComponentPolymorphic variant="black" as={"section"}>
        Hola
      </ComponentPolymorphic> */}
      {/* <HOC /> */}
      <FiltersProvider>
        <Suspense fallback={<div>Loading Page Filter Products...</div>}>
          <FilterProducts />
        </Suspense>
      </FiltersProvider>
    </Principal>
  );
};
export default App;

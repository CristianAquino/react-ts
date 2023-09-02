import { lazy } from "react";
import { AxiosInterceptor } from "./interceptors";
import { MainContent, PrincipalContent } from "./styles";
// import { FilterProducts } from "./pages";
import { UploadImageProvider } from "./context";
import {
  CatFact,
  PracticeHooks,
  SearchMovies,
  UploadImage,
  WebCamAccess,
} from "./pages";
const FilterProducts = lazy(
  () => import("./pages/FilterProducts/FilterProducts")
);
// lazy(() => import("./components/Filters"));
import { Toaster } from "react-hot-toast";

AxiosInterceptor();

const App = () => {
  // const [score, setScore] = useState(4);

  return (
    <PrincipalContent>
      <Toaster />
      {/* <ScrollSnap /> */}
      {/* <StarRating rating={score} setRating={setScore} /> */}
      {/* <PracticeHForm /> */}
      {/* <ComponentPolymorphic variant="black" as={"section"}>
        Hola
      </ComponentPolymorphic> */}
      {/* <HOC /> */}
      {/* <FiltersProvider>
        <Suspense fallback={<div>Loading Page Filter Products...</div>}>
          <FilterProducts />
        </Suspense>
      </FiltersProvider> */}
      <MainContent>
        {/* <UploadImageProvider>
          <UploadImage />
        </UploadImageProvider> */}
        {/* <CatFact /> */}
        {/* <WebCamAccess /> */}
        {/* <SearchMovies /> */}
        <PracticeHooks />
      </MainContent>
    </PrincipalContent>
  );
};
export default App;

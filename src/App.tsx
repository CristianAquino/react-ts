import { useState } from "react";
import {
  ComponentPolymorphic,
  HOC,
  PracticeHForm,
  ScrollSnap,
  StarRating,
} from "./components";
import { AxiosInterceptor } from "./interceptors";
import { Principal } from "./styles";

AxiosInterceptor();
const App = () => {
  const [score, setScore] = useState(4);
  return (
    <Principal>
      {/* <ScrollSnap /> */}
      {/* <StarRating rating={score} setRating={setScore} /> */}
      {/* <PracticeHForm /> */}
      {/* <ComponentPolymorphic variant="black" as={"section"}>
        Hola
      </ComponentPolymorphic> */}
      <HOC />
    </Principal>
  );
};
export default App;

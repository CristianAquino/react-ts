import { Carousel } from "./components";

const App = () => {
  const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
  ];
  return (
    <div>
      <Carousel images={images} autoPlay={false} showButtons={false} />
    </div>
  );
};
export default App;

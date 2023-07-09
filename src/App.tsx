// import Hijo1 from "./Hijo1";
// import EdadProvider from "./edadContext";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { MoviesProvider } from "./context/MoviesContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <div>
      {/* <EdadProvider>
        <Hijo1 />
      </EdadProvider> */}
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
};
export default App;

import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Movie from "./Movie";

const MovieList = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;

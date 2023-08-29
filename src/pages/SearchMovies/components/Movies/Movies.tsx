import { ListMovies } from "..";
import { Movie } from "../../models";

export type MoviesProps = {
  movies: Movie[];
};

export const NoneMovieResult = () => {
  return <p>No se encontraron peliculas para la busqueda realizada</p>;
};

const Movies = ({ movies }: MoviesProps) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListMovies movies={movies} /> : <NoneMovieResult />;
};

export default Movies;

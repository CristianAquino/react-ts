import { Movie } from "../../models";

export type ListMoviesProps = {
  movies: Movie[];
};

const ListMovies = ({ movies }: ListMoviesProps) => {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
        gap: "16px",
        listStyle: "none",
      }}
    >
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} style={{ width: "100%" }} />
        </li>
      ))}
    </ul>
  );
};

export default ListMovies;

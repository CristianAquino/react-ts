import { useContext } from "react";
import { MovieModel } from "../models";
import UserContext from "../context/UserContext";

const imgStyles = {
  height: "260px",
  ["object-fit"]: "cover",
  ["object-position"]: "top center",
};

const Movie = ({ movie }: { movie: MovieModel }) => {
  const { user, toggleFavoriteMovieToUser } = useContext(UserContext);
  const isFavorite = user?.favoriteMovies.includes(movie.id);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={movie.imageUrl}
        alt={movie.title}
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        {user && (
          <button
            className={`btn ${
              isFavorite ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
            Favorito
          </button>
        )}
      </div>
    </div>
  );
};
export default Movie;

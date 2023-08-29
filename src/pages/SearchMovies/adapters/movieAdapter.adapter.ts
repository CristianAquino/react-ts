import { EndpointMovie, Movie } from "../models";

export const movieAdpater = (movie: EndpointMovie) => {
  const formatMovie: Movie = {
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    type: movie.Type,
    poster: movie.Poster,
  };
  return formatMovie;
};

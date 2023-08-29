import { movieAdpater } from "../adapters";
import { EndpointMovie } from "../models";

export const searchMovies = ({ search }: { search: string }) => {
  if (search === "") {
    return [];
  }
  return fetch("https://www.omdbapi.com/?apikey=4287ad07&s=" + search)
    .then((res) => res.json())
    .then((data) => {
      return data?.Search.map((movie: EndpointMovie) => movieAdpater(movie));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

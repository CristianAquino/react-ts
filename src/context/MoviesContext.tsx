import { createContext } from "react";
import initialMovies from "../data.json";
import { MovieModel } from "../models";

interface MoviesContextModel {
  movies: MovieModel[];
}

const MoviesContext = createContext<MoviesContextModel>(
  {} as MoviesContextModel
);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const data = { movies: initialMovies };
  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContext;

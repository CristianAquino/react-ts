import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services";
import { Movie } from "../models";

type SearchMoviesProps = {
  search: string;
  sort: boolean;
};

export const useMovie = ({ search, sort }: SearchMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const previousSearch = useRef(search);
  const getMovies = useCallback(async ({ search }: { search: string }) => {
    if (search === previousSearch.current) return;

    previousSearch.current = search;
    const nuevasMovies = await searchMovies({ search });
    setMovies(nuevasMovies);
  }, []);

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  return { movies: sortMovies, getMovies };
};

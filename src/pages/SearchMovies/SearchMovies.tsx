import { useState } from "react";
import { Movies } from "./components";
import { useDebounce, useMovie, useSearch } from "./hooks";

export type SearchMoviesProps = {};

const SearchMovies = ({}: SearchMoviesProps) => {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovie({ search, sort });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const { query } = Object.fromEntries(new FormData(e.currentTarget));
    // console.log({ query });
    getMovies({ search });
  };

  const handleDebounce = useDebounce(getMovies, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    handleDebounce({ search: newSearch });
    // getMovies({ search: newSearch });
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={search}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            onChange={() => setSort(!sort)}
            checked={sort}
          />
          <button disabled={error ? true : false}>Buscar</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
};

export default SearchMovies;

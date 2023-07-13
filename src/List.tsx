import { useEffect, useState } from "react";

interface Pokemon {
  species: { name: string };
}

const initialPokemon = {
  species: { name: "base" },
};

const List = ({ input }) => {
  const [data, setdata] = useState<Pokemon>(initialPokemon);
  const handleAPI = async () => {
    const base = await fetch("https://pokeapi.co/api/v2/pokemon/" + input);
    const data = await base.json();
    return data;
  };
  useEffect(() => {
    handleAPI().then((data) => setdata(data));
  }, [input]);

  return <div>{data.species?.name}</div>;
};

export default List;

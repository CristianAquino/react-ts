const BASE_URL = "https://rickandmortyapi.com/api/";
const CHARACTER_URL = `${BASE_URL}character/`;

export const getMorty = () => {
  return fetch(CHARACTER_URL + "2").then((res) => res.json());
};

import { loadAbortController } from "../helpers";

const BASE_URL = "https://rickandmortyapi.com/api/";
const CHARACTER_URL = `${BASE_URL}character/`;

export const getRick = async () => {
  const controller = loadAbortController();
  const conn = await fetch(CHARACTER_URL + 1, { signal: controller.signal });
  const res = await conn.json();
  return { call: res, controller };
};

import { loadAbort } from "../helpers";
import axios from "axios";
import { UserInfo } from "../models";

const BASE_URL = "https://rickandmortyapi.com/api/";
const CHARACTER_URL = `${BASE_URL}character/`;

export const getLogin = () => {
  const controller = loadAbort();
  return {
    call: axios.get<UserInfo>(CHARACTER_URL + 2, {
      signal: controller.signal,
    }),
    controller,
  };
};

import axios from "axios";
import { PicsumImageModel } from "../models";

const BASE_URL = "https://picsum.photos/v2/list?page=20&limit=10";

const getPicsumImage = async () => {
  return axios.get<PicsumImageModel[]>(BASE_URL);
};

export { getPicsumImage };

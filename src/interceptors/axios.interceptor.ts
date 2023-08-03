import axios from "axios";
import { validationError } from "../utils";

const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(validationError(error.code));
      Promise.reject(error);
    }
  );
};

export { AxiosInterceptor };

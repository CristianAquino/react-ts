import axios, { AxiosRequestConfig } from "axios";
import { getValidationError, notifyError } from "../helpers";

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const token = "dsaaaaaaaaaaa";
    const newHeader = {
      Autorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeader;
    return request;
  };

  axios.interceptors.request.use((request: any) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      notifyError(getValidationError(error.code));
      return Promise.reject(error); // cancelamos la peticion
    }
  );
};

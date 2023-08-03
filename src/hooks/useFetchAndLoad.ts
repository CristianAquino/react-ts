import { AxiosResponse } from "axios";
import { useState } from "react";

const useFetchaAndLoad = () => {
  const [loading, setLoading] = useState(false);

  const callEndpoint = async (axiosCall: Promise<AxiosResponse<any>>) => {
    setLoading(true);

    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall;
    } catch (error) {}
    setLoading(false);
    return result.data;
  };
  return { loading, callEndpoint };
};

export { useFetchaAndLoad };

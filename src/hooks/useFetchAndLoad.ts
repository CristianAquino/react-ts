import { useEffect, useState } from "react";

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let newController: any;

  const callEndPoint = async (axiosCall: any) => {
    const { call, controller } = await axiosCall;
    if (controller) newController = controller;
    setLoading(true);
    let result = {};
    try {
      result = await call;
    } catch (error) {}
    setLoading(false);
    return result;
  };

  const cancelEndPoint = () => {
    setLoading(false);
    newController && newController.abort();
  };

  // cuando se desmonta el componente se cancela la peticion
  useEffect(() => {
    return () => {
      cancelEndPoint();
    };
  }, []);

  return [loading, callEndPoint] as const;
};
export default useFetchAndLoad;

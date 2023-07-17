import { useEffect, useState } from "react";
import { getRick } from "../../services";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import useAsync from "../../hooks/useAsync";

const Component2 = () => {
  const [rick, setRick] = useState(null);
  const [loading, callEndPoint] = useFetchAndLoad();

  const getApi = async () => await callEndPoint(getRick());

  const adapterRick = (data: any) => {
    setRick(data.name);
  };

  useAsync(getApi, adapterRick, () => {});

  return <div>{loading ? "Loading.." : rick}</div>;
};
export default Component2;

import { useEffect, useState } from "react";
import { getMorty } from "../../services";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import useAsync from "../../hooks/useAsync";

const Component1 = () => {
  const [morty, setMorty] = useState(null);
  const [loading, callEndPoint] = useFetchAndLoad();

  const getApi = async () => await callEndPoint(getMorty());

  const adapterMorty = (data: any) => {
    setMorty(data.name);
  };

  useAsync(getApi, adapterMorty, () => {});

  return <div>{loading ? "Loading..." : morty}</div>;
};
export default Component1;

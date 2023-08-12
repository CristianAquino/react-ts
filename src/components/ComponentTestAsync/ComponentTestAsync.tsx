import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "../../utils";

export type ComponentTestAsyncProps = {};

const ComponentTestAsync: React.FC<ComponentTestAsyncProps> = ({}) => {
  const [result, setResult] = useState();
  const [error, setError] = useState<boolean>(false);

  let url = "https://rickandmortyapi.com/api/characters/1";

  const fetchRickAndMorty = async () => {
    const response = await fetch(url)
      .then((res) => {
        if (res.status !== 200) throw new Error("NO ANDOO");
        setError(false);
        return res;
      })
      .catch((error) => {
        setError(true);
        url = "https://rickandmortyapi.com/api/character/1";
        throw error;
      });
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    fetchRickAndMorty();
    setTimeout(() => {
      fetchRickAndMorty();
    }, 4000);
  }, []);

  return (
    <ErrorBoundary
      fallbackComponent={<>NO ANDA!!</>}
      resetCondition={result}
      error={error}
    >
      <div>{JSON.stringify(result)}</div>
    </ErrorBoundary>
  );
};

export default ComponentTestAsync;

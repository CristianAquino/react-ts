import { useEffect, useState } from "react";
import { getFact } from "../services";

export const useCatFact = () => {
  const [fact, setFact] = useState<null | string>(null);

  const getRandomFact = () => {
    getFact().then((data) => {
      const { fact } = data;
      setFact(fact);
    });
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  return { fact, getRandomFact };
};

import { useEffect, useState } from "react";
import { getImage } from "../services";

type UseCatImageProps = {
  fact: string | null;
};

const CAT_PRFIX_URL = "https://cataas.com";

export const useCatImage = ({ fact }: UseCatImageProps) => {
  const [imageURL, setImageURL] = useState<null | string>(null);

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3).join(" ");
    getImage(threeFirstWords).then((data) => {
      const { url } = data;
      setImageURL(url);
    });
  }, [fact]);
  return { imageURL: `${CAT_PRFIX_URL}${imageURL}` };
};

import { useEffect, useState } from "react";
import { useFetchaAndLoad } from "../../hooks";
import { PicsumImageModel } from "../../models";
import { getPicsumImage } from "../../services";
import { ContentImage, Image } from "../../styles/ContentImage.style";

export type ScrollSnapProps = {};

const ScrollSnap: React.FC<ScrollSnapProps> = () => {
  const [images, setimages] = useState<PicsumImageModel[]>([]);
  const { loading, callEndpoint } = useFetchaAndLoad();

  const getImage = async () => {
    const result = await callEndpoint(getPicsumImage());
    setimages(result);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <ContentImage>
      {loading && <h1>Loading..</h1>}
      {images.map((image) => (
        <Image key={image.id} src={image.download_url} />
      ))}
    </ContentImage>
  );
};

export default ScrollSnap;

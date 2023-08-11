import { useEffect, useState } from "react";
import { useFetchaAndLoad } from "../../hooks";
import { PicsumImageModel } from "../../models";
import { getPicsumImage } from "../../services";
import { CarrouselImage, ContentCarrouselImage, Image } from "../../styles";

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
    <ContentCarrouselImage>
      {loading && <h1>Loading..</h1>}
      {images.map((image) => (
        <CarrouselImage key={image.id}>
          <Image src={image.download_url} />
        </CarrouselImage>
      ))}
    </ContentCarrouselImage>
  );
};

export default ScrollSnap;

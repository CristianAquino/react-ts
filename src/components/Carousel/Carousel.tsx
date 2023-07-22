import { useEffect, useState } from "react";
import { styled } from "styled-components";

export type CarouselProps = {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
};

const CarouselImg = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const CarouselButton = styled.button`
  color: #fff;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay,
  showButtons,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? index < images.length - 1 : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? index + 1
          : 0
        : condition
        ? index - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <CarouselImg
        className={loaded ? "loaded" : ""}
        src={selectedImage}
        alt="ga"
        onLoad={() => setLoaded(true)}
      />
      <CarouselButtonContainer>
        {showButtons && (
          <>
            <CarouselButton onClick={previous}>{" < "}</CarouselButton>
            <CarouselButton onClick={next}>{" > "}</CarouselButton>
          </>
        )}
      </CarouselButtonContainer>
    </>
  );
};

export default Carousel;

import { ImageContentBox } from "..";
import { ImageContainer } from "../../styles";

export type ContainerImageProps = {
  images: File[];
  openModal: () => void;
};

const ContainerImage = ({ images, openModal }: ContainerImageProps) => {
  return (
    <ImageContainer>
      {images.map((value, index) => (
        <ImageContentBox
          key={index}
          value={value}
          index={index}
          openModal={openModal}
        />
      ))}
    </ImageContainer>
  );
};

export default ContainerImage;

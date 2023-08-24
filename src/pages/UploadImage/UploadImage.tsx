import { AiOutlineSwap } from "react-icons/ai";
import { UploadImageContext } from "../../context";
import { useCustomerContext } from "../FilterProducts/hooks";
import {
  ContainerImage,
  FooterUploadImage,
  InputUploadImage,
  ModalPreviewImage,
  TargetUploadImage,
} from "./components";
import { useModal, useUploadImage } from "./hooks";
import { STORE_UPLOAD_TYPE } from "./reducer";
import { BodyUploadImage, LabelTitle, UploadContent } from "./styles";
export type UploadImageProps = {};

const UploadImage = ({}: UploadImageProps) => {
  const { images, dispatch } = useCustomerContext(UploadImageContext);
  const [isOpen, openModal, closeModal] = useModal();
  const [refImageChane, handleChangeAll] = useUploadImage();

  return (
    <UploadContent>
      {isOpen && <ModalPreviewImage closeModal={closeModal} />}
      <LabelTitle>
        Upload Image{" "}
        {images.length > 0 && (
          <AiOutlineSwap
            style={{ transform: "rotate(90deg)", cursor: "pointer" }}
            onClick={() => dispatch({ type: STORE_UPLOAD_TYPE.REVERSEFILES })}
          />
        )}
      </LabelTitle>
      <InputUploadImage ref={refImageChane} onChange={handleChangeAll} />
      <BodyUploadImage>
        {images.length > 0 ? (
          <>
            <ContainerImage images={images} openModal={openModal} />
            <FooterUploadImage
              onReset={() => dispatch({ type: STORE_UPLOAD_TYPE.RESET })}
              onAdd={() => refImageChane.current?.click()}
            />
          </>
        ) : (
          <TargetUploadImage
            handleClick={() => refImageChane.current?.click()}
          />
        )}
      </BodyUploadImage>
    </UploadContent>
  );
};

export default UploadImage;

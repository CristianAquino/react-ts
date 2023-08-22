import {
  AiOutlineCloseCircle,
  AiOutlineEdit,
  AiOutlineExpandAlt,
  AiOutlineSwap,
} from "react-icons/ai";
import { UploadImageContext } from "../../context";
import { Image } from "../../styles";
import { useCustomerContext } from "../FilterProducts/hooks";
import {
  InputUploadImage,
  FooterUploadImage,
  ModalPreviewImage,
  TargetUploadImage,
} from "./components";
import { useModal, useUploadImage } from "./hooks";
import { STORE_UPLOAD_TYPE } from "./reducer";
import { sharinInformationNameImage } from "./services";
import {
  BodyUploadImage,
  BoxUpluadImage,
  ButtonIconActions,
  ButtonsContainerUpload,
  ImageContainer,
  LabelTitle,
  UploadContent,
} from "./styles";
import { ChangeEvent } from "react";
export type UploadImageProps = {};

const UploadImage = ({}: UploadImageProps) => {
  const { images, dispatch } = useCustomerContext(UploadImageContext);
  const [isOpen, openModal, closeModal] = useModal();
  const [refImageChane, handleChangeAll] = useUploadImage();
  const [refImageOnly, , handleChangeOnly] = useUploadImage();

  const handleSharedNameImage = (nameImage: string) => {
    openModal();
    sharinInformationNameImage.setObservable(nameImage);
  };
  const getMap = () => {
    if (!refImageOnly.current) {
      refImageOnly.current = new Map();
    }
    return refImageOnly.current;
  };
  const handleOnlyImage = (index: number) => {
    const map = getMap();
    const node = map?.get(index);
    node.click();
  };
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
            <ImageContainer>
              {images.map((value, index) => (
                <BoxUpluadImage
                  key={value.name}
                  boxHeight="250px"
                  boxWidth="100%"
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={URL.createObjectURL(value)}
                    onClick={() => handleSharedNameImage(value.name)}
                  />
                  <ButtonsContainerUpload
                    style={{ borderRadius: "8px" }}
                    className="control"
                  >
                    <ButtonIconActions
                      onClick={() => handleSharedNameImage(value.name)}
                    >
                      <AiOutlineExpandAlt style={{ color: "#fff" }} />
                    </ButtonIconActions>
                    <ButtonIconActions onClick={() => handleOnlyImage(index)}>
                      <AiOutlineEdit style={{ color: "#248eff" }} />
                    </ButtonIconActions>
                    <ButtonIconActions
                      onClick={() =>
                        dispatch({
                          type: STORE_UPLOAD_TYPE.DELETEFILE,
                          payload: value,
                        })
                      }
                    >
                      <AiOutlineCloseCircle style={{ color: "#cf1020" }} />
                    </ButtonIconActions>
                  </ButtonsContainerUpload>
                  <InputUploadImage
                    ref={(node) => {
                      const map = getMap();
                      if (node) {
                        map?.set(index, node);
                      } else {
                        map?.delete(index);
                      }
                    }}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleChangeOnly(e, index);
                    }}
                  />
                </BoxUpluadImage>
              ))}
            </ImageContainer>
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

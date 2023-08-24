import { ChangeEvent } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineEdit,
  AiOutlineExpandAlt,
} from "react-icons/ai";
import { InputUploadImage } from "..";
import { UploadImageContext } from "../../../../context";
import { Image } from "../../../../styles";
import { useCustomerContext } from "../../../FilterProducts/hooks";
import { useUploadImage } from "../../hooks";
import { STORE_UPLOAD_TYPE } from "../../reducer";
import { sharinInformationNameImage } from "../../services";
import {
  BoxUpluadImage,
  ButtonIconActions,
  ButtonsContainerUpload,
} from "../../styles";

export type ImageContentBoxProps = {
  value: File;
  index: number;
  openModal: () => void;
};

const ImageContentBox = ({ value, index, openModal }: ImageContentBoxProps) => {
  const { dispatch } = useCustomerContext(UploadImageContext);
  const [refImageOnly, , handleChangeOnly] = useUploadImage();

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
  const handleSharedNameImage = (nameImage: string) => {
    openModal();
    sharinInformationNameImage.setObservable(nameImage);
  };
  return (
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
        <ButtonIconActions onClick={() => handleSharedNameImage(value.name)}>
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
  );
};

export default ImageContentBox;

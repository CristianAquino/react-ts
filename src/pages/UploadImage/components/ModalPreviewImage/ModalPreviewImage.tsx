import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { UploadImageContext } from "../../../../context";
import { useCustomerContext } from "../../../FilterProducts/hooks";
import { useUploadImage } from "../../hooks/useUploadImages";
import { sharinInformationNameImage } from "../../services";
import {
  BoxUpluadImage,
  ButtonIconActions,
  ButtonsContainerUpload,
} from "../../styles";
import { InputUploadImage } from "..";

export type ModalPreviewImageProps = {
  closeModal: () => void;
};

const ModalPreviewImage = ({ closeModal }: ModalPreviewImageProps) => {
  const subscription = sharinInformationNameImage.getObservable();
  const { images } = useCustomerContext(UploadImageContext);
  const [selectIndex, setSelectIndex] = useState(0);
  const [refImageOnly, , handleEdit] = useUploadImage();
  const testRef = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, h: 0, w: 0 });

  const selectNewImage = (index: number, next = true) => {
    const nextIndex = next
      ? (index + 1) % images.length
      : (index - 1 + images.length) % images.length;
    setSelectIndex(nextIndex);
  };

  useEffect(() => {
    subscription.subscribe((data) => {
      if (data) {
        const nuevo = images.findIndex((item) => item.name === data);
        setSelectIndex(nuevo);
      }
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          setSelectIndex((prev) => (prev + 1) % images.length);
          break;
        case "ArrowLeft":
          setSelectIndex((prev) => (prev - 1 + images.length) % images.length);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handlePointer = (e: MouseEvent) => {
      setPosition({
        x: e.offsetX,
        y: e.offsetY,
        h: testRef.current.clientHeight - e.offsetY,
        w: testRef.current.clientWidth - e.offsetX,
      });
    };
    testRef.current.addEventListener("pointermove", handlePointer);
  }, []);
  return (
    <div
      onClick={closeModal}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.5)",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <BoxUpluadImage onClick={(e) => e.stopPropagation()}>
        <ButtonsContainerUpload
          style={{
            height: "48px",
            width: "48px",
            top: "16px",
            borderRadius: "50%",
          }}
          onClick={closeModal}
          className={position.y <= 150 ? "up" : ""}
        >
          <ButtonIconActions>
            <AiOutlineClose style={{ color: "#fff" }} />
          </ButtonIconActions>
        </ButtonsContainerUpload>
        <ButtonsContainerUpload
          style={{
            height: "48px",
            width: "48px",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
          className={position.x <= 150 ? "left" : ""}
        >
          <ButtonIconActions
            style={{ width: "100%", height: "100%" }}
            onClick={() => selectNewImage(selectIndex, false)}
          >
            <AiOutlineLeft style={{ color: "#fff" }} />
          </ButtonIconActions>
        </ButtonsContainerUpload>
        <ButtonsContainerUpload
          style={{
            height: "48px",
            width: "48px",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
          }}
          className={position.w <= 150 ? "right" : ""}
        >
          <ButtonIconActions
            style={{ width: "100%", height: "100%" }}
            onClick={() => selectNewImage(selectIndex)}
          >
            <AiOutlineRight style={{ color: "#fff" }} />
          </ButtonIconActions>
        </ButtonsContainerUpload>
        <img
          style={{
            maxHeight: "100vh",
            height: "100%",
            maxWidth: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
          src={URL.createObjectURL(images[selectIndex])}
          ref={testRef}
        />
        <ButtonsContainerUpload
          style={{
            height: "48px",
            width: "48px",
            bottom: "16px",
            borderRadius: "50%",
          }}
          className={position.h <= 150 ? "down" : ""}
        >
          <ButtonIconActions onClick={() => refImageOnly.current.click()}>
            <AiOutlineEdit style={{ color: "#248eff" }} />
          </ButtonIconActions>
          <InputUploadImage
            ref={refImageOnly}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleEdit(e, selectIndex)
            }
          />
        </ButtonsContainerUpload>
      </BoxUpluadImage>
    </div>
  );
};

export default ModalPreviewImage;

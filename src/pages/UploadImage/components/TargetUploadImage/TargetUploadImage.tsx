import { DragEvent, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TargetUpload } from "../../styles";
import { useCustomerContext } from "../../../FilterProducts/hooks";
import { UploadImageContext } from "../../../../context";
import { STORE_UPLOAD_TYPE } from "../../reducer";

export type TargetUploadImageProps = {
  handleClick: () => void;
};

const TargetUploadImage = ({ handleClick }: TargetUploadImageProps) => {
  const [inDrag, setInDrag] = useState(false);
  const { dispatch } = useCustomerContext(UploadImageContext);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInDrag(true);
  };
  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setInDrag(false);
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    dispatch({ type: STORE_UPLOAD_TYPE.ADDFILES, payload: files });
  };
  return (
    <TargetUpload
      onClick={handleClick}
      className={inDrag ? "inDrag" : ""}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <AiOutlineCloudUpload style={{ fontSize: "64px", color: "#fff" }} />
      <p style={{ fontWeight: "bold", fontSize: "24px" }}>
        Select Files To Upload
      </p>
      <p style={{ color: "#d7d7d7", fontSize: "16px" }}>
        Or Drag and Drop Files Here
      </p>
    </TargetUpload>
  );
};

export default TargetUploadImage;

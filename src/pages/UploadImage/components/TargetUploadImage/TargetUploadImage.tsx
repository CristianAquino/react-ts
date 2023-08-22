import { AiOutlineCloudUpload } from "react-icons/ai";
import { TargetUpload } from "../../styles";

export type TargetUploadImageProps = {
  handleClick: () => void;
};

const TargetUploadImage = ({ handleClick }: TargetUploadImageProps) => {
  return (
    <TargetUpload onClick={handleClick}>
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

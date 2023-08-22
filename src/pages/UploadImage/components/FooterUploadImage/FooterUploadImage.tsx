import { AiOutlineDelete, AiOutlineFileImage } from "react-icons/ai";
import { ButtonIconActions } from "../../styles";

export type FooterUploadImageProps = {
  onReset: () => void;
  onAdd: () => void;
};

const FooterUploadImage = ({ onAdd, onReset }: FooterUploadImageProps) => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
        borderTop: "1px solid #fff",
        gap: "16px",
      }}
    >
      <ButtonIconActions
        style={{
          background: "#1e1e1e",
          color: "#248eff",
          borderRadius: "8px",
          padding: "8px 0",
          width: "100%",
        }}
        onClick={onAdd}
      >
        Add More Images <AiOutlineFileImage />
      </ButtonIconActions>
      <ButtonIconActions
        style={{
          background: "#1e1e1e",
          color: "#cf1020",
          borderRadius: "8px",
          padding: "8px 0",
          width: "100%",
        }}
        onClick={onReset}
      >
        Clear All <AiOutlineDelete />
      </ButtonIconActions>
    </footer>
  );
};

export default FooterUploadImage;

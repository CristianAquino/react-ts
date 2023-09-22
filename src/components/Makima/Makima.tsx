import makima from "./assets/csm.webp";
import bnha from "./assets/bnha.png";
import "./assets/manejo.css";

export type MakimaProps = {};

const Makima = ({}: MakimaProps) => {
  return (
    <div
      style={{
        height: "338px",
        width: "600px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={makima}
        // src={bnha}
        alt="makima"
        style={{
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
    </div>
  );
};

export default Makima;

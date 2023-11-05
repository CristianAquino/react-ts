import makima from "./assets/csm.webp";
import bnha from "./assets/bnha.png";
import { AnimationImage } from "./styled-components";

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
      <AnimationImage
        src={makima}
        // src={bnha}
        alt="makima"
        $steps={23}
      />
    </div>
  );
};

export default Makima;

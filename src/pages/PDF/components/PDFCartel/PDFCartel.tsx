import B from "./svg/B.svg";
import L1 from "./svg/L1.svg";
import L2 from "./svg/L2.svg";
import R1 from "./svg/R1.svg";
import R2 from "./svg/R2.svg";

export type PDFCartelProps = {};

const PDFCartel = ({}: PDFCartelProps) => {
  return (
    <div
      style={{
        height: "800px",
        width: "565px",
        background: "#b19568",
        // background: "#D4C4AB",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        color: "#392f2c",
        gap: "20px",
      }}
    >
      <header
        style={{
          width: "100%",
          height: "117px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          fontSize: "106px",
          fontFamily: "timesRoman",
          fontWeight: "600",
          textShadow: "0 0 5px #392f2c",
        }}
      >
        WANTED
      </header>
      <div
        style={{
          width: "100%",
          height: "350px",
          background: "#b19568",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.mundodeportivo.com/alfabeta/hero/2021/01/Luffy-de-One-Piece.jpg?width=1200&aspect_ratio=16:9"
          alt="luffy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "sepia(.7)",
          }}
        />
      </div>
      <footer
        style={{
          width: "100%",
          height: "253px",
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          className="L"
          style={{
            height: "100%",
            width: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <img src={L1} alt="" />
          <img src={L2} alt="" />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "199px",
              display: "flex",
              gap: "10px",
            }}
          >
            <section
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{
                  height: "46px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "51px",
                  fontFamily: "timesRoman",
                  textShadow: "0 0 5px #392f2c",
                }}
              >
                DEAD OR ALIVE
              </p>
              <p
                style={{
                  height: "87px",
                  fontSize: "62px",
                  fontFamily: "hadijah",
                  letterSpacing: "-5px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  textShadow: "0 0 5px #392f2c",
                }}
              >
                MONKEY D LUFFY
              </p>
              <div style={{ height: "46px", display: "flex", gap: "10px" }}>
                <img src={B} alt="" />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "51px",
                    fontFamily: "hadijah",
                    textShadow: "0 0 5px #392f2c",
                  }}
                >
                  1,500,500.00 -
                </p>
              </div>
            </section>
            <div
              className="R"
              style={{
                height: "100%",
                width: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <img src={R1} alt="" />
              <img src={R2} alt="" />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "8px",
              height: "44px",
            }}
          >
            <p
              style={{
                width: "318px",
                fontSize: "10px",
                fontFamily: "fancyCard",
                textShadow: "0 0 5px #392f2c",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            </p>
            <p
              style={{
                width: "164px",
                fontSize: "39px",
                fontFamily: "hadijah",
                fontWeight: "600",
                letterSpacing: "4px",
                display: "flex",
                alignItems: "center",
                textShadow: "0 0 5px #392f2c",
              }}
            >
              MARINE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PDFCartel;

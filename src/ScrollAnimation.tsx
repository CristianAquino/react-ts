import { useEffect, useRef, useState } from "react";

const styles = {
  height: "180vh",
  background: "pink",
};

type divCurrent = HTMLDivElement;

const ScrollAnimation = () => {
  const [background, setBackground] = useState<string>("pink");
  const divRef = useRef<divCurrent>({} as divCurrent);

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const background = y <= 0 ? "orange" : "pink";
      setBackground(background);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ ...styles, background }}>
        <h1>Scroll change backgroun color</h1>
      </div>
    </div>
  );
};
export default ScrollAnimation;

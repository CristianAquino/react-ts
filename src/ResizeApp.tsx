import { useEffect, useState } from "react";

const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div>
      <h1>{windowWidth}</h1>
      {windowWidth < 768 && <h2>Show only mobile device</h2>}
    </div>
  );
};
export default ResizeApp;

import { useEffect, useState } from "react";
import { Position } from "../models";

const initialPosition = { x: null, y: null };

const useMousePosition = () => {
  const [position, setPosition] = useState<Position>(initialPosition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return position;
};
export default useMousePosition;

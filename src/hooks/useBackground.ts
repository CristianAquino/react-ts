import useMousePosition from "./useMousePosition";

const useBackground = () => {
  const position = useMousePosition();
  const background =
    (position.x as number) > window.innerWidth / 2 ? "orange" : "pink";

  return [background, position] as const;
};
export default useBackground;

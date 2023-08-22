import { styled } from "styled-components";

const BoxImage = styled.div<{ boxWidth?: string; boxHeight?: string }>`
  position: relative;
  width: ${(props) => props.boxWidth};
  height: ${(props) => props.boxHeight};
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export { BoxImage, Image };

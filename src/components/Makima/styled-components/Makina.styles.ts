import styled, { keyframes } from "styled-components";

const aniImg = keyframes`
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
    `;

//makina 3s steps(23) infinite;
//bnh 5s steps(62) infinite;

const AnimationImage = styled.img<{ $steps: number }>`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${aniImg} 3s steps(${(props) => props.$steps}) infinite;
`;

export { AnimationImage };

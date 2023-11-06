import styled from "styled-components";

const handleSize = "3rem";
const imgGap = ".25rem";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Slider = styled.div`
  --items-per-screen: 4; // con esto decidimos cuantos items mostrar al usuario
  --slider-index: 0;
  display: flex;
  flex-grow: 1;
  margin: 0 ${imgGap};
  transform: translatex(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;

  & > img {
    max-width: calc(100% / var(--items-per-screen));
    flex: 0 0 calc(100% / var(--items-per-screen));
    aspect-ratio: 16/9;
    padding: ${imgGap};
    border-radius: 1rem;
  }

  @media (width<=1000px) {
    --items-per-screen: 3;
  }
`;

const Handle = styled.button`
  border: none;
  border-radius: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${handleSize};
  background-color: rgb(0 0 0 /0.25);
  z-index: 10;
  color: #fff;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${imgGap} 0;
  &:hover {
    background-color: rgb(0 0 0 /0.5);
  }
  &.left-handle {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &.right-handle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc(${imgGap}*2 + ${handleSize});
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 0.25rem;
  & > div {
    flex: 0 0 1.5rem;
    min-width: 1.5rem;
    height: 0.5rem;
    background-color: rgb(255 255 255 /0.5);
  }
  & > div.active {
    background-color: rgb(255 255 255 /0.9);
  }
`;

const ProgressBarItem = styled.div`
  flex: 0 0 1.5rem;
  min-width: 1.5rem;
  height: 0.5rem;
  background-color: rgb(255 255 255 /0.5);
  &.active {
    background-color: rgb(255 255 255 /0.9);
  }
`;

export {
  Container,
  Slider,
  Handle,
  Header,
  Title,
  ProgressBar,
  ProgressBarItem,
};

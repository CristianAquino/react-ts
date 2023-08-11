import styled from "styled-components";
import { BoxImage } from "./Image.style";

const ContentCarrouselImage = styled.section`
  /* display: flex; */
  max-width: 300px;
  height: 200px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;
const CarrouselImage = styled(BoxImage)`
  height: 200px;
  width: 300px;
  scroll-snap-align: center;
`;

export { CarrouselImage, ContentCarrouselImage };

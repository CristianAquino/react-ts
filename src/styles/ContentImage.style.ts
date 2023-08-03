import styled from "styled-components";

const ContentImage = styled.section`
  display: flex;
  max-width: 300px;
  height: 200px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  scroll-snap-align: center;
`;

export { ContentImage, Image };

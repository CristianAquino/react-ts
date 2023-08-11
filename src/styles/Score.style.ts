import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

const Score = styled(AiFillStar)<{ checkStar?: boolean }>`
  font-size: 100px;
  color: ${(props) => (props.checkStar ? "#ffc107" : "#e4e5e9")};
`;

export { Score };

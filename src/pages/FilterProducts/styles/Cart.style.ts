import { styled } from "styled-components";

const CartContent = styled.aside`
  background-color: #000;
  display: none;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  & img {
    aspect-ratio: 16/9;
    width: 100%;
  }
  & li {
    border-bottom: 1px solid #444;
    padding-bottom: 1rem;
  }
`;

const CartFooter = styled.footer`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  & button {
    padding: 0.5rem;
  }
`;

const CartButton = styled.label`
  align-items: center;
  background-color: #09f;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  padding: 4px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  transition: all 0.3s ease;
  width: 2rem;
  z-index: 2;
  &:hover {
    scale: 1.1;
  }
  & ~ input:checked ~ ${CartContent} {
    height: 100%;
    display: block;
  }
`;

export { CartContent, CartFooter, CartButton };

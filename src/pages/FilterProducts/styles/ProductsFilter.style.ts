import { styled } from "styled-components";

const GridProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-gap: 1.25rem;
  list-style: none;
`;

const ListProducts = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 4px;
  background-color: #111;
  color: #fff;
  padding: 1rem;
`;

const FiltersContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  & > div {
    display: flex;
    gap: 1rem;
  }
`;
export { GridProducts, ListProducts, FiltersContent };

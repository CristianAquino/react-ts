import { Filters } from "..";
export type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <h1>React shop</h1>
      <Filters />
    </header>
  );
};

export default Header;

import { FiltersContext } from "../../../../context";
import { CartContext } from "../../context";
import { useCustomerContext } from "../../hooks";

export type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const { filters } = useCustomerContext(FiltersContext);
  const { cart } = useCustomerContext(CartContext);
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {JSON.stringify(cart, null, 2)}
    </footer>
  );
};

export default Footer;

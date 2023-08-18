import { BsCart4, BsCartDash } from "react-icons/bs";
import { useId } from "react";
import { CartButton, CartContent, CartFooter } from "../../styles";
import { useCustomerContext } from "../../hooks";
import { CartContext } from "../../context";
export type CartProps = {};

const Cart = ({}: CartProps) => {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCustomerContext(CartContext);

  return (
    <>
      <CartButton htmlFor={cartCheckboxId}>
        <BsCart4 />
      </CartButton>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <CartContent>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <CartFooter>
                <small>Qty: {item.quantity}</small>
                <button onClick={() => addToCart(item)}>+</button>
              </CartFooter>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>
          <BsCartDash />
        </button>
      </CartContent>
    </>
  );
};

export default Cart;

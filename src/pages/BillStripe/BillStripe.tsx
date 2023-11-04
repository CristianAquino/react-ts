import { useEffect, useState } from "react";
import { getAllProducts } from "./services";
import { PRODUCT } from "./models";

export type BillStripeProps = {};

const BillStripe = ({}: BillStripeProps) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function allProducts() {
      const response = await getAllProducts();
      setProducts(response);
    }
    allProducts();
  }, []);

  const handleCheckout = (id: string) => {
    console.log(id);
  };
  return (
    <div>
      {products.length == 0 ? (
        <div>Loading...</div>
      ) : (
        products.map((product: PRODUCT) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <img src={product.image[0]} alt={product.name} />
            <button onClick={() => handleCheckout(product.id)}>Buy</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BillStripe;

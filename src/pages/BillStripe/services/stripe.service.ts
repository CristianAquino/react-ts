import { stripeAdapter } from "../adapter";

import { BASE_ROUTE, ROUTE_PRODUCT } from ".";

export const getAllProducts = () =>
  fetch(BASE_ROUTE + ROUTE_PRODUCT.ALL_PRODUCTS)
    .then((res) => res.json())
    .then((data) => data.map((product: any) => stripeAdapter(product)));

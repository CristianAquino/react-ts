import { BASE_PRODUCT } from "../models";

function stripeAdapter(data: BASE_PRODUCT) {
  const product = {
    id: data.id,
    price: data.unitPrice,
    name: data.name,
    image: data.images,
    slug: data.slug,
    brand: data.brand,
  };
  return product;
}

export { stripeAdapter };

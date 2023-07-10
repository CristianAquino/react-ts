export interface ProductModel {
  products: ProductModelProduct[];
  cart: ProductModelCart[];
  activeProduct: ProductModelProduct;
}
interface ProductModelCart {
  id: number;
  title: string;
  quantity: number;
}

interface ProductModelProduct {
  id: number;
  title: string;
}

export type ProductAction = { type: string; payload: any };

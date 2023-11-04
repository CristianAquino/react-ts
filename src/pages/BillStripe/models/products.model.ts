export interface BASE_PRODUCT {
  id: string;
  name: string;
  unitPrice: number;
  discountPercentage: number;
  unitInStock: number;
  description: string;
  images: string[];
  brand: string;
  category: string;
  slug: string;
  createdAt: Date;
  updatedAd: Date;
}

export interface PRODUCT {
  id: string;
  price: number;
  name: string;
  image: string[];
  slug: string;
  brand: string;
}

import { products } from "../data/products";

export function getProductBySlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return products.find((product) => product.slug === slug);
}
import { products } from "../data/products";

export const productService = {
  getAll() {
    return products;
  },

  getBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
  },

  getFeatured() {
    return products.slice(0, 5);
  },
};
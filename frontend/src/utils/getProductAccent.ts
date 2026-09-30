import type { ProductAccent } from "../types/product.types";

const accentMap: Record<ProductAccent, string> = {
  red: "#ef2f25",
  green: "#24b85a",
  mint: "#33d6bf",
  yellow: "#f2df5b",
  white: "#f5f5f5",
};

export function getProductAccent(accent: ProductAccent): string {
  return accentMap[accent];
}
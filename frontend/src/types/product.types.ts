export type ProductAccent = "red" | "green" | "mint" | "yellow" | "white";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  weight: string;
  packageWeight: string;
  country: string;
  flavor: string;
  accent: ProductAccent;
  accentHex: string;
  shortDescription: string;
  description: string;
  features: string[];
  usage: string[];
  images: string[];
  isAvailable: boolean;
}
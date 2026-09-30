import type { Product } from "../../types/product.types";
import { Badge } from "../ui/Badge";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div
      className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-black via-[#161616] to-black"
      style={{
        boxShadow: `inset 0 -120px 170px ${product.accentHex}24`,
      }}
    >
      <div className="absolute left-6 top-6">
        <Badge color={product.accentHex}>{product.flavor}</Badge>
      </div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${product.accentHex}, transparent 35%)`,
        }}
      />

      <div className="relative text-center">
        <div
          className="text-7xl font-black uppercase tracking-tighter md:text-8xl"
          style={{ color: product.accentHex }}
        >
          Горец
        </div>

        <div className="mx-auto mt-8 flex h-72 w-52 items-center justify-center rounded-3xl border border-white/10 bg-black shadow-2xl">
          <div
            className="px-4 text-center text-4xl font-black uppercase leading-none"
            style={{ color: product.accentHex }}
          >
            {product.flavor}
          </div>
        </div>

        <div className="mt-6 text-sm font-black uppercase tracking-[0.25em] text-white/35">
          60 г · Россия
        </div>
      </div>
    </div>
  );
}
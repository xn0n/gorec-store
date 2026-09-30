import { Link } from "react-router";
import type { Product } from "../../types/product.types";
import { formatPrice } from "../../utils/formatPrice";
import { Badge } from "../ui/Badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <Link to={`/product/${product.slug}`} className="block">
        <div
          className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#181818] to-black"
          style={{
            boxShadow: `inset 0 -90px 130px ${product.accentHex}22`,
          }}
        >
          <div className="absolute left-5 top-5">
            <Badge color={product.accentHex}>{product.flavor}</Badge>
          </div>

          {product.oldPrice && (
            <div className="absolute right-5 top-5 rounded-full bg-red-600 px-3 py-1 text-xs font-black text-white">
              -50%
            </div>
          )}

          <div className="text-center">
            <div
              className="text-5xl font-black uppercase tracking-tighter md:text-6xl"
              style={{ color: product.accentHex }}
            >
              Горец
            </div>

            <div className="mx-auto mt-5 flex h-44 w-32 items-center justify-center rounded-2xl border border-white/10 bg-black shadow-2xl">
              <div
                className="px-3 text-center text-2xl font-black uppercase leading-none"
                style={{ color: product.accentHex }}
              >
                {product.flavor}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
            {product.category}
          </div>

          <h3 className="mt-2 text-xl font-black text-white">{product.name}</h3>

          <p className="mt-2 min-h-12 text-sm leading-6 text-white/55">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-2xl font-black text-white">
                {formatPrice(product.price)}
              </div>

              {product.oldPrice && (
                <div className="text-sm font-semibold text-white/35 line-through">
                  {formatPrice(product.oldPrice)}
                </div>
              )}
            </div>

            <div
              className="rounded-full px-4 py-2 text-sm font-black uppercase text-black"
              style={{ backgroundColor: product.accentHex }}
            >
              Купить
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
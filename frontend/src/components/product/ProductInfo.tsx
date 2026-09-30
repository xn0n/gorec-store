import type { Product } from "../../types/product.types";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../ui/Button";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <div className="text-sm font-black uppercase tracking-[0.2em] text-red-500">
        {product.category}
      </div>

      <h1 className="mt-3 text-5xl font-black uppercase tracking-tight text-white">
        {product.name}
      </h1>

      <p className="mt-5 text-lg leading-8 text-white/65">
        {product.description}
      </p>

      <div className="mt-8 flex items-end gap-4">
        <div className="text-4xl font-black text-white">
          {formatPrice(product.price)}
        </div>

        {product.oldPrice && (
          <div className="pb-1 text-xl font-bold text-white/30 line-through">
            {formatPrice(product.oldPrice)}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm">
        <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
          <span className="text-white/45">Вес без упаковки</span>
          <span className="font-bold text-white">{product.weight}</span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
          <span className="text-white/45">Вес с упаковкой</span>
          <span className="font-bold text-white">{product.packageWeight}</span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
          <span className="text-white/45">Страна производства</span>
          <span className="font-bold text-white">{product.country}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-white/45">Вариант</span>
          <span className="font-bold text-white">{product.flavor}</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button>Добавить в корзину</Button>
        <Button to="/checkout" variant="secondary">
          Купить сейчас
        </Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-black uppercase text-white">
            Преимущества
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">
            {product.features.map((feature) => (
              <li key={feature}>— {feature}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-black uppercase text-white">
            Как использовать
          </h2>

          <ol className="mt-4 space-y-3 text-sm leading-6 text-white/60">
            {product.usage.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
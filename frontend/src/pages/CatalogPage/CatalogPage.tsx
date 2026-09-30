import { ProductGrid } from "../../components/product/ProductGrid";
import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { products } from "../../data/products";

export function CatalogPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Каталог"
          title="Нюхательная соль Горец"
          text="Выберите вариант под свой тренировочный ритуал: классика, ель, мята, лимон или чеснок."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {["Все товары", "Классика", "Ель", "Мята", "Лимон", "Чеснок"].map(
            (item) => (
              <button
                key={item}
                type="button"
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-bold uppercase tracking-wide text-white/65 transition hover:border-red-500/50 hover:text-white"
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
}
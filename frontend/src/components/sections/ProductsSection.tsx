import { products } from "../../data/products";
import { ProductGrid } from "../product/ProductGrid";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function ProductsSection() {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Каталог" title="Линейка Горец" />

          <Button to="/catalog" variant="secondary">
            Все товары
          </Button>
        </div>

        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
}
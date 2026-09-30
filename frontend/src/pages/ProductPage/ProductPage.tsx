import { useParams } from "react-router";
import { ProductGallery } from "../../components/product/ProductGallery";
import { ProductInfo } from "../../components/product/ProductInfo";
import { Container } from "../../components/ui/Container";
import { EmptyState } from "../../components/ui/EmptyState";
import { getProductBySlug } from "../../utils/getProductBySlug";

export function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <section className="py-20">
        <Container>
          <EmptyState
            title="Товар не найден"
            text="Такого товара пока нет в каталоге. Вернитесь к списку продукции ГОРЕЦ."
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </Container>
    </section>
  );
}
import { Container } from "../../components/ui/Container";
import { EmptyState } from "../../components/ui/EmptyState";

export function CartPage() {
  return (
    <section className="py-20">
      <Container>
        <EmptyState
          title="Корзина пока пустая"
          text="На следующем этапе подключим состояние корзины, добавление товаров, изменение количества и расчет итоговой суммы."
          buttonText="Перейти в каталог"
          buttonTo="/catalog"
        />
      </Container>
    </section>
  );
}
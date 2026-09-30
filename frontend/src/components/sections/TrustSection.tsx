import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

const trustItems = [
  {
    title: "Производство в России",
    text: "Данные о стране производства уже подтверждены по характеристикам товара.",
  },
  {
    title: "Понятные характеристики",
    text: "Вес товара, формат и варианты линейки выводятся прямо в карточке.",
  },
  {
    title: "Цена маркетплейса",
    text: "На текущем этапе ориентир стоимости — 350–400 рублей за баночку.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Доверие"
          title="Честная карточка без лишних обещаний"
          text="Мы не делаем неподтвержденных медицинских заявлений, а подаем продукт как спортивный инструмент для ритуала концентрации."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-black uppercase text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
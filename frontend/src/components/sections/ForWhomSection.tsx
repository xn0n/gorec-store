import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

const sports = [
  "Пауэрлифтинг",
  "Бодибилдинг",
  "Единоборства",
  "Кроссфит",
  "Тяжелая атлетика",
  "Функциональный тренинг",
];

export function ForWhomSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Аудитория"
          title="Для спортсменов с характером"
          text="ГОРЕЦ ориентирован на тех, кто работает с высокой интенсивностью и ценит концентрацию перед ключевым моментом."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport) => (
            <div
              key={sport}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-xl font-black uppercase text-white"
            >
              {sport}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
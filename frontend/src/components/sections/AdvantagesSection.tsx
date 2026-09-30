import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

const advantages = [
  {
    title: "Резкий настрой",
    text: "Помогает собраться перед подходом, раундом или интенсивной тренировкой.",
  },
  {
    title: "Компактный формат",
    text: "Баночку удобно брать с собой в зал, на соревнования и сборы.",
  },
  {
    title: "Для спорта",
    text: "Подходит для силовых тренировок, единоборств и функциональной нагрузки.",
  },
  {
    title: "Линейка вкусов",
    text: "Классика, ель, мята, лимон и чеснок — разные варианты под характер спортсмена.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Преимущества"
          title="Для тех, кто выходит на тренировку собранным"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-xl font-black text-white">
                {advantage.title}
              </div>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {advantage.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
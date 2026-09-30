import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

const steps = [
  "Откройте баночку перед подходом или тренировочным эпизодом.",
  "Поднесите продукт на комфортное расстояние.",
  "Сделайте короткий вдох.",
  "После использования плотно закройте крышку.",
];

export function HowToUseSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Применение"
            title="Простой ритуал перед нагрузкой"
            text="Блок нужен для доверия: пользователь сразу понимает, как использовать продукт и в каких ситуациях он уместен."
          />

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-3xl border border-white/10 bg-black/35 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-lg font-black">
                  {index + 1}
                </div>

                <p className="pt-2 text-white/65">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
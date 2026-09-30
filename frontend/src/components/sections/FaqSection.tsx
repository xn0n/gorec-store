import { faqItems } from "../../data/faq";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function FaqSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Частые вопросы"
          text="Блок снижает сомнения перед покупкой и помогает пользователю быстрее принять решение."
        />

        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <summary className="cursor-pointer list-none text-xl font-black uppercase text-white">
                {item.question}
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/60">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
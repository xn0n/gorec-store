import { reviews } from "../../data/reviews";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function ReviewsSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20">
      <Container>
        <SectionTitle
          eyebrow="Отзывы"
          title="Что говорят спортсмены"
          text="Пока это демонстрационные отзывы. Позже заменим их реальными отзывами с маркетплейсов или от клиентов."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-3xl border border-white/10 bg-black/35 p-6"
            >
              <div className="text-sm font-black uppercase tracking-wide text-red-500">
                {review.sport}
              </div>

              <div className="mt-3 text-xl font-black text-white">
                {review.author}
              </div>

              <div className="mt-2 text-sm text-yellow-300">
                {"★".repeat(review.rating)}
              </div>

              <p className="mt-4 text-sm leading-6 text-white/60">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
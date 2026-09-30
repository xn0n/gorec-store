import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";

export function CheckoutPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Оформление заказа"
          title="Заказ продукции Горец"
          text="Здесь будет форма с контактами покупателя, способом доставки, способом оплаты и итоговой суммой заказа."
        />

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/70"
              placeholder="Ваше имя"
            />

            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/70"
              placeholder="Телефон"
            />

            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/70 md:col-span-2"
              placeholder="Адрес доставки"
            />
          </div>

          <button
            type="button"
            className="mt-6 rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500"
          >
            Оформить заказ
          </button>
        </div>
      </Container>
    </section>
  );
}
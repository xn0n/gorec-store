import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,47,37,0.28),transparent_35%),linear-gradient(135deg,#000,#111,#050505)]" />

      <Container className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-red-500">
            Нюхательная соль для спорта
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
            Горец — заряд концентрации перед тренировкой
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Спортивная нюхательная соль для тех, кому важны фокус, настрой и
            уверенный выход на подход.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/catalog">Смотреть каталог</Button>
            <Button to="/about" variant="secondary">
              О бренде
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {["Сила", "Концентрация", "Настрой"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm font-black uppercase tracking-wide text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-[520px] w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />

          <div className="relative flex h-[420px] w-[290px] items-center justify-center rounded-[2rem] border border-white/10 bg-[#080808] shadow-2xl">
            <div className="absolute -top-16 h-20 w-64 rounded-t-2xl border border-white/10 bg-[#111]" />

            <div className="text-center">
              <div className="text-6xl font-black uppercase tracking-tighter text-red-600">
                Горец
              </div>
              <div className="mt-6 text-2xl font-black uppercase text-white">
                Классика
              </div>
              <div className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-white/40">
                Сила концентрация
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
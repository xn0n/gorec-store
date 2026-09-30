import { Link, NavLink } from "react-router";

const navItems = [
  { label: "Главная", to: "/" },
  { label: "Каталог", to: "/catalog" },
  { label: "Доставка", to: "/delivery" },
  { label: "Оплата", to: "/payment" },
  { label: "FAQ", to: "/faq" },
  { label: "Контакты", to: "/contacts" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/40 bg-red-600/15 text-xl font-black text-red-500">
            Г
          </div>

          <div>
            <div className="text-xl font-black uppercase tracking-[0.18em] text-white">
              Горец
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">
              сила концентрация
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition ${
                  isActive
                    ? "text-red-500"
                    : "text-white/65 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/cart"
          className="rounded-full border border-red-500/50 bg-red-600 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-500"
        >
          Корзина
        </Link>
      </div>
    </header>
  );
}
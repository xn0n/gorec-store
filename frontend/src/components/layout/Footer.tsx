import { Link } from "react-router";
import { siteInfo } from "../../data/siteInfo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="text-3xl font-black uppercase tracking-[0.18em] text-red-500">
            {siteInfo.brandName}
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
            Интернет-магазин спортивной продукции для концентрации, настроя и
            уверенного выхода на тренировку.
          </p>

          <div className="mt-5 text-sm font-bold uppercase tracking-wide text-white/35">
            {siteInfo.slogan}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Магазин
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/55">
            <Link to="/catalog" className="hover:text-white">
              Каталог
            </Link>
            <Link to="/cart" className="hover:text-white">
              Корзина
            </Link>
            <Link to="/checkout" className="hover:text-white">
              Оформление заказа
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Информация
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/55">
            <Link to="/delivery" className="hover:text-white">
              Доставка
            </Link>
            <Link to="/payment" className="hover:text-white">
              Оплата
            </Link>
            <Link to="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link to="/contacts" className="hover:text-white">
              Контакты
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Документы
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/55">
            <Link to="/privacy" className="hover:text-white">
              Политика конфиденциальности
            </Link>
            <Link to="/agreement" className="hover:text-white">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/35">
        © 2026 ГОРЕЦ. Проект интернет-магазина находится в разработке.
      </div>
    </footer>
  );
}
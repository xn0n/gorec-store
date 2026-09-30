import { Route, Routes } from "react-router";
import { MainLayout } from "../components/layout/MainLayout";
import { CartPage } from "../pages/CartPage/CartPage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { CheckoutPage } from "../pages/CheckoutPage/CheckoutPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { SimplePage } from "../pages/SimplePage/SimplePage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route
          path="/delivery"
          element={
            <SimplePage
              title="Доставка"
              text="Здесь будет информация о способах, сроках и стоимости доставки. Пока раздел работает как заготовка."
            />
          }
        />

        <Route
          path="/payment"
          element={
            <SimplePage
              title="Оплата"
              text="Здесь будут описаны доступные способы оплаты заказа."
            />
          }
        />

        <Route
          path="/about"
          element={
            <SimplePage
              title="О бренде"
              text="ГОРЕЦ — спортивный бренд для тех, кто ценит настрой, дисциплину и концентрацию перед тренировкой."
            />
          }
        />

        <Route
          path="/contacts"
          element={
            <SimplePage
              title="Контакты"
              text="Здесь будут контакты магазина, форма обратной связи и ссылки на социальные сети."
            />
          }
        />

        <Route
          path="/faq"
          element={
            <SimplePage
              title="FAQ"
              text="Здесь будут ответы на частые вопросы о товаре, заказе, доставке и применении."
            />
          }
        />

        <Route
          path="/privacy"
          element={
            <SimplePage
              title="Политика конфиденциальности"
              text="Здесь будет юридический текст политики обработки персональных данных."
            />
          }
        />

        <Route
          path="/agreement"
          element={
            <SimplePage
              title="Пользовательское соглашение"
              text="Здесь будет пользовательское соглашение интернет-магазина."
            />
          }
        />

        <Route
          path="*"
          element={
            <SimplePage
              title="Страница не найдена"
              text="Такой страницы пока нет. Вернитесь в каталог или на главную."
            />
          }
        />
      </Route>
    </Routes>
  );
}
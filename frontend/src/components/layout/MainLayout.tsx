import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
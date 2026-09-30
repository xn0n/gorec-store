import { AdvantagesSection } from "../../components/sections/AdvantagesSection";
import { FaqSection } from "../../components/sections/FaqSection";
import { ForWhomSection } from "../../components/sections/ForWhomSection";
import { HeroSection } from "../../components/sections/HeroSection";
import { HowToUseSection } from "../../components/sections/HowToUseSection";
import { ProductsSection } from "../../components/sections/ProductsSection";
import { ReviewsSection } from "../../components/sections/ReviewsSection";
import { TrustSection } from "../../components/sections/TrustSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <ProductsSection />
      <HowToUseSection />
      <ForWhomSection />
      <TrustSection />
      <ReviewsSection />
      <FaqSection />
    </>
  );
}
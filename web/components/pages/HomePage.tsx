import { Hero } from "../features/homepage/Hero";
import { LogoSection } from "../features/homepage/LogoSection";
import { RecommendedSpaces } from "../features/homepage/RecommendedSpaces";

export default function HomePage() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <Hero />
      <LogoSection />
      <RecommendedSpaces />
    </div>
  );
}

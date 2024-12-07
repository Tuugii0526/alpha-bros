import { Hero } from "../features/homepage/Hero";
import { LogoSection } from "../features/homepage/LogoSection";
import { Navbar } from "../features/homepage/Navbar";
import { RecommendedSpaces } from "../features/homepage/RecommendedSpaces";

export default function HomePage() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <Navbar />
      <Hero />
      <LogoSection />
      <RecommendedSpaces />
    </div>
  );
}

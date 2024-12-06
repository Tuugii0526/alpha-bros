import { Hero } from "../features/homepage/Hero";
import { Navbar } from "../features/homepage/Navbar";
import { SinglePage } from "../singlePage/SinglePage";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

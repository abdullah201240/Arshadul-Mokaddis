import { Header } from "@/components/header";
import Hero from "@/components/hero";
import HeroMobile from "@/components/hero-mobile";
import FeaturedProjects from "@/components/portfolio";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Skill from "@/components/skill";

export default function Home() {
  return (
    // Removed bg-background class to allow the global gradient to show through
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Desktop Hero - hidden on mobile */}
        <div className="hidden sm:block">
          <Hero />
        </div>
        {/* Mobile Hero - visible only on mobile */}
        <div className="sm:hidden">
          <HeroMobile />
        </div>
        <Skill />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
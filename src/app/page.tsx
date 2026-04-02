import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { PhilosophySection } from "../components/sections/PhilosophySection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ClientsSection } from "../components/sections/ClientsSection";
import { CtaBannerSection } from "../components/sections/CtaBannerSection";
import { ExpertiseSection } from "../components/sections/ExpertiseSection";
import { PresenceSection } from "../components/sections/PresenceSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesSection />
        <ClientsSection />
        <CtaBannerSection />
        <ExpertiseSection />
        <PresenceSection />
      </main>
      <Footer />
    </>
  );
}
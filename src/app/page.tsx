import Contact from "@/components/contact-2";
import ContentSection from "@/components/content-1";
import CTA from "@/components/cta";
import Features from "@/components/features-3";
import FeaturesSection from "@/components/features-7";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import StatsSection from "@/components/stats-two";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <LogoCloud />
      <ContentSection />
      <Features />
      <FeaturesSection />
      <StatsSection />
      <TeamSection />
      <CTA />
      <Contact />
      <FooterSection />
    </div>
  );
}

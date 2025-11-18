import ContentSection from "@/components/content-1";
import CTA from "@/components/cta";
import Features from "@/components/features-3";
import FeaturesSection from "@/components/features-7";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <ContentSection />
      <Features />
      <FeaturesSection />
      <TeamSection />
      <CTA />
    </div>
  );
}

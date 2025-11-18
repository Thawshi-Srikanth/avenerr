import ContentSection from "@/components/content-1";
import Features from "@/components/features-3";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <ContentSection />
      <Features/>
    </div>
  );
}

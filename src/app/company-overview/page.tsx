import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { managementTeam } from "@/lib/team-data";

export default function CompanyOverviewPage() {
  const partners = [
    { name: "EuroPharma", country: "France" },
    { name: "MedItalia", country: "Italy" },
    { name: "IndoLife Sciences", country: "India" },
    { name: "Global Medics", country: "USA" },
    { name: "SwissHealth", country: "Switzerland" },
    { name: "Nordic Pharma", country: "Sweden" },
    { name: "AusBiotech", country: "Australia" },
    { name: "Nippon Medical", country: "Japan" },
    { name: "CanHealth", country: "Canada" },
    { name: "UK BioLabs", country: "UK" },
    { name: "GermaCare", country: "Germany" },
    { name: "SinoPharm", country: "China" },
    { name: "RusMed", country: "Russia" },
    { name: "BrazPharma", country: "Brazil" },
    { name: "S.A. Health", country: "South Africa" },
    { name: "K-Bio", country: "South Korea" },
    { name: "TurkMed", country: "Turkey" },
    { name: "MexiHealth", country: "Mexico" },
    { name: "ArgBio", country: "Argentina" },
    { name: "IndoNes", country: "Indonesia" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/images/group-pic.jpg"
          alt="Company Overview"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 border px-3 py-1 mb-4 bg-background/50 backdrop-blur-md">
              <span className="text-xs font-bold tracking-widest uppercase">
                Corporate Structure
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4">
              Company Overview
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Driving innovation through leadership and strategic partnerships.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-32">
        {/* Section: Vision & Mission */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
                Vision & Mission
              </h2>
              <p className="text-muted-foreground text-lg">
                Our guiding principles and commitment to excellence.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most sought-after pharmaceutical products supplier
                in Sri Lanka by offering one of the widest portfolios of
                high-quality pharmaceuticals and surgical instruments, supported
                by compliant systems, reliable distribution, and trusted
                partnerships across the healthcare sector.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To achieve market leadership in the Sri Lankan pharmaceutical
                industry by delivering safe, effective, and quality-assured
                products through robust regulatory compliance, efficient
                logistics, and ethical scientific engagement. We are committed
                to exceeding customer expectations through service excellence,
                continuous training, and a people-driven culture, while
                upholding the highest standards of integrity, professionalism,
                and ethical conduct.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Management Team */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative border-t pt-32">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
                Management Team
              </h2>
              <p className="text-muted-foreground text-lg">
                Meet the visionaries guiding Avenierr Pharma towards global
                excellence.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {managementTeam.map((member, i) => (
                <div key={i} className="group flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-xl bg-muted aspect-3/4 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-bold uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>

                    <Link
                      href={`/company-overview/team/${member.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors mt-2 group/btn"
                    >
                      View Profile
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Subsidiaries */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative border-t pt-32">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
                Our Subsidiaries
              </h2>
              <p className="text-muted-foreground text-lg">
                Expanding our reach through specialized entities.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="bg-background border p-12">
              <h3 className="text-3xl font-bold mb-6">AZEL Life Sciences</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                AZEL Life Sciences is built on over 25 years of experience in
                the pharmaceutical industry. It works with world-class
                manufacturers to bring the best possible pharmaceutical and
                nutraceutical solutions to the ever-evolving needs of their
                clients.
              </p>
              <div className="border-t pt-8">
                <p className="text-sm font-bold uppercase tracking-wider mb-4">
                  Key Specialties
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Cardiology", "Endocrinology", "Rheumatology"].map(
                    (spec) => (
                      <span
                        key={spec}
                        className="px-4 py-2 bg-muted border text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {spec}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Partners */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative border-t pt-32">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
                Our Partners
              </h2>
              <p className="text-muted-foreground text-lg">
                Collaborating with global leaders to ensure supply chain
                excellence.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-12">
              <p>
                Management of the supply chain is very critical to ensure the
                availability of the stocks in the market. This process commences
                from the time of procurement and ends after the supply of
                products to the customers. The company has assigned the duties
                of the total supply chain to the relevant officers who are
                accountable for the smooth function of their respective
                processes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="group relative bg-background border p-6 hover:border-primary transition-colors cursor-default min-h-[160px] flex flex-col justify-between"
                >
                  <div className="self-end">
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground group-hover:text-primary transition-colors border px-2 py-0.5 bg-background z-10 relative">
                      {partner.country}
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="relative w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image
                        src="/images/partner-placeholder.png"
                        alt="Partner Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-bold text-sm leading-tight">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

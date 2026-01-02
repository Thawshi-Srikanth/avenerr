import Image from "next/image";

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

  const managementTeam = [
    {
      name: "Mr. C. Sathananthan",
      role: "Managing Director",
      bio: "Founder of Avenierr Pharma (Pvt) Ltd, serving as Managing Director since 2007. With industry experience dating back to 1995, he has risen from Medical Representative to territory and field management roles before establishing Avenierr.",
      isMain: true,
    },
    {
      name: "Mr. T. Saravanan",
      role: "Director Marketing",
      bio: "Initiated career at Dr. Reddy’s Laboratories. 19 years of experience in regional marketing and strategic partnership development.",
    },
    {
      name: "Mr. Sanjaya Kurukulasooriya",
      role: "Director Surgical",
      bio: "Industry veteran since 1998. Joined Avenierr in 2009. Previously served at Harcourts Pharmacy and Dr. Reddy’s Laboratories.",
    },
    {
      name: "Mr. R. Saravanan",
      role: "Senior Marketing Manager",
      bio: "Joined in 2022. Alumnus of London Business School & IIM Ahmedabad. 23 years experience with giants like Novartis, Abbott, and Torrent Pharmaceuticals. Responsible for building market-leading brands.",
      isWide: true,
    },
    {
      name: "Mr. J. L. V. Fernando",
      role: "Manager – Finance",
      bio: "Joined in 2018. Previously at Asha Agencies (1993-2017). Expert in financial strategy, control, and reporting. Finale at Institute of Chartered Accountants of SL.",
    },
    {
      name: "Mr. Heroshana Perera",
      role: "Head of Operations",
      bio: "15+ years experience (Emerchemie NB, Hemas). MBA from ICFAI University India and BSc from University of Colombo.",
    },
    {
      name: "Ms. Vindhya Wijesundara",
      role: "Manager – Regulatory Affairs",
      bio: "Previously at Ashland Associates, Chesco, and Asiri Hospital. Diploma in Pharmacy from University of Colombo.",
    },
    {
      name: "Ms. S. Chithra",
      role: "Senior HR",
      bio: "First Class graduate from Northumbria University, UK. Focuses on company culture and employee well-being. Previously at Brandix and The HR Consortium.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/images/business-hero.png"
          alt="Company Overview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
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
        {/* Section 1: Management Team */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-red-600">
                Management Team
              </h2>
              <p className="text-muted-foreground text-lg">
                Meet the visionaries guiding Avenierr Pharma towards global
                excellence.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-8">
              {managementTeam.map((member, i) => (
                <div
                  key={i}
                  className={`bg-background border p-8 hover:border-primary/50 transition-colors group ${
                    member.isMain ? "md:col-span-2" : ""
                  } ${member.isWide ? "md:col-span-2" : ""}`}
                >
                  <div
                    className={`flex flex-col ${
                      member.isMain ? "md:flex-row gap-8" : "gap-6"
                    }`}
                  >
                    <div
                      className={`relative shrink-0 overflow-hidden border bg-muted ${
                        member.isMain ? "w-40 h-40" : "w-24 h-24"
                      }`}
                    >
                      <Image
                        src="/images/avatar-placeholder.png"
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-bold mb-1 ${
                          member.isMain ? "text-3xl" : "text-xl"
                        }`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
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
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-red-600">
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
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-red-600">
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

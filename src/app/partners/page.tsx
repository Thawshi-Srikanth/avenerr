import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/partners-data";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/images/business-hero.png"
          alt="Our Partners"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4">
              Our Partners
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Collaborating with global leaders to ensure supply chain
              excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-32">
        {/* Section: Partners */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
                Global Network
              </h2>
              <p className="text-muted-foreground text-lg">
                Our trusted partners across the globe.
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, i) => (
                <Link
                  key={i}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-8 transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative w-full aspect-[3/2] transition-all duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

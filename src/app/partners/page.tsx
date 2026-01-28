import Image from "next/image";
import Link from "next/link";
import { businessCategories } from "@/lib/business-data";
import { partners } from "@/lib/partners-data";

export default function PartnersPage() {
  // Get list of suppliers that have products
  const suppliersWithProducts = new Set<string>();

  const extractSuppliers = (categories: typeof businessCategories) => {
    categories.forEach((cat) => {
      cat.products?.forEach((p) => {
        if (p.supplier) suppliersWithProducts.add(p.supplier);
      });
      if (cat.subCategories) {
        extractSuppliers(cat.subCategories);
      }
    });
  };

  extractSuppliers(businessCategories);

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

          <div className="lg:w-3/4 space-y-16">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
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

            {["Pharmaceuticals", "Nutraceuticals", "Medical Devices"].map(
              (category) => {
                const categoryPartners = partners.filter(
                  (p) => p.business_category === category,
                );

                if (categoryPartners.length === 0) return null;

                return (
                  <div key={category} className="space-y-8">
                    <h3 className="text-2xl font-bold text-foreground border-b pb-4">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {categoryPartners.map((partner, i) => (
                        <div
                          key={i}
                          className="group bg-background border px-6 py-8 flex flex-col items-center text-center gap-6 hover:border-primary transition-colors"
                        >
                          <div className="relative h-20 w-40 opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0">
                            <Image
                              src={partner.image}
                              alt={`${partner.name} Logo`}
                              fill
                              className="object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-lg font-bold">
                              {partner.name}
                            </h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">
                              {partner.country}
                            </p>
                          </div>

                          <div className="flex flex-col w-full gap-3 mt-auto">
                            {suppliersWithProducts.has(partner.name) && (
                              <Link
                                href={`/business?query=${encodeURIComponent(
                                  partner.name,
                                )}`}
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium h-9 px-4 rounded-md hover:bg-primary/90 transition-colors"
                              >
                                View Products
                              </Link>
                            )}
                            <Link
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 bg-muted text-muted-foreground text-sm font-medium h-9 px-4 rounded-md hover:bg-muted/80 hover:text-foreground transition-colors"
                            >
                              Visit Website
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

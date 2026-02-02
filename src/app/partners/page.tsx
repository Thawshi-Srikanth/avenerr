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

            {/* Principal Partners Section */}
            {/* Principal Partners Section */}
            {partners.some((p) => p.featured) && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground border-b pb-4 shadow-sm">
                  Strategic Partnerships
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {partners
                    .filter((p) => p.featured)
                    .map((partner, i) => (
                      <div
                        key={i}
                        className="group bg-background border rounded-none overflow-hidden shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[300px]">
                          {/* Partner Brand Section */}
                          <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary/50 to-transparent" />
                            <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-none uppercase tracking-widest">
                              Featured Partner
                            </div>

                            <div className="flex-1 flex flex-col items-start justify-center gap-6">
                              <div className="relative h-24 w-56 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                  src={partner.image}
                                  alt={`${partner.name} Logo`}
                                  fill
                                  className="object-contain object-left"
                                />
                              </div>
                              <div className="space-y-2 max-w-md">
                                <div className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-none bg-primary" />
                                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Headquartered in {partner.country}
                                  </p>
                                </div>
                                <p className="text-muted-foreground">
                                  A leading global innovator in medical
                                  technology, committed to enhancing patient
                                  care through advanced solutions.
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-4 w-full mt-8">
                              {(suppliersWithProducts.has(partner.name) ||
                                partner.product_catalog_url) && (
                                <Link
                                  href={
                                    partner.product_catalog_url ||
                                    `/business?query=${encodeURIComponent(
                                      partner.name,
                                    )}`
                                  }
                                  target={
                                    partner.product_catalog_url
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    partner.product_catalog_url
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium h-11 px-6 rounded-md hover:bg-primary/90 transition-all shadow-md hover:translate-y-[-1px]"
                                >
                                  View Product Catalog
                                </Link>
                              )}
                              <Link
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-background border text-foreground text-sm font-medium h-11 px-6 rounded-md hover:bg-muted transition-colors"
                              >
                                Visit Website
                              </Link>
                            </div>
                          </div>

                          {/* Country Manager Section */}
                          {partner.country_manager && (
                            <div className="lg:col-span-2 relative bg-muted/30 border-t lg:border-t-0 lg:border-l p-8 lg:p-12 flex flex-col justify-center">
                              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-50" />
                              <div className="relative flex flex-col items-center text-center gap-6">
                                <div className="relative group/avatar">
                                  <div className="relative h-50 w-40 rounded-none overflow-hidden border border-background shadow-xl">
                                    <Image
                                      src={partner.country_manager.image}
                                      alt={partner.country_manager.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-1.5">
                                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-none mb-3">
                                    Leadership
                                  </div>
                                  <h4 className="text-2xl font-bold text-foreground">
                                    {partner.country_manager.name}
                                  </h4>
                                  <p className="text-primary font-medium">
                                    {partner.country_manager.role}
                                  </p>
                                  {partner.country_manager.contact_info && (
                                    <p className="text-muted-foreground text-sm mt-2">
                                      {partner.country_manager.contact_info}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {["Pharmaceuticals", "Nutraceuticals", "Medical Devices"].map(
              (category) => {
                const categoryPartners = partners.filter(
                  (p) => p.business_category === category && !p.featured,
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
                            {(suppliersWithProducts.has(partner.name) ||
                              partner.product_catalog_url) && (
                              <Link
                                href={
                                  partner.product_catalog_url ||
                                  `/business?query=${encodeURIComponent(
                                    partner.name,
                                  )}`
                                }
                                target={
                                  partner.product_catalog_url
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  partner.product_catalog_url
                                    ? "noopener noreferrer"
                                    : undefined
                                }
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

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { businessCategories, type Product } from "@/lib/business-data";

export default async function BusinessSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const decodedQuery = query ? decodeURIComponent(query) : "";

  // Filter products by supplier OR category
  const getFilteredProducts = (searchQuery: string) => {
    if (!searchQuery) return [];

    const results = new Set<Product>();
    const lowerQuery = searchQuery.toLowerCase();

    const processCategory = (cat: (typeof businessCategories)[0]) => {
      // Check if Category Title OR Slug matches query
      // This allows searching "surgicals" to find categories with "surgicals-" slug prefix
      const catMatch =
        cat.title.toLowerCase().includes(lowerQuery) ||
        cat.slug.toLowerCase().includes(lowerQuery);

      if (catMatch) {
        // If category matches, add ALL its products (and sub-products)
        if (cat.products) {
          cat.products.forEach((p) => {
            results.add(p);
          });
        }
        if (cat.subCategories) {
          cat.subCategories.forEach((sub) => {
            if (sub.products) {
              sub.products.forEach((p) => {
                results.add(p);
              });
            }
          });
        }
      } else {
        // If category doesn't match, check subcategories
        if (cat.subCategories) {
          cat.subCategories.forEach((sub) => {
            processCategory(sub);
          });
        }

        // Check products directly
        if (cat.products) {
          cat.products.forEach((p) => {
            if (p.supplier?.toLowerCase().includes(lowerQuery)) {
              results.add(p);
            }
          });
        }
      }
    };

    businessCategories.forEach(processCategory);
    return Array.from(results);
  };

  const filteredProducts = getFilteredProducts(decodedQuery);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/business-hero.png"
          alt="Our Products"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-4 bg-black/20 backdrop-blur-md">
              <span className="text-xs font-bold tracking-widest uppercase text-white">
                Product Catalog
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
              {decodedQuery ? `${decodedQuery} Products` : "All Products"}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-light">
              Browsing our extensive range of medical solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {decodedQuery ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                Results for "{decodedQuery}"
              </h2>
              <span className="text-muted-foreground">
                {filteredProducts.length} items found
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="py-24 text-center border rounded-xl bg-muted/10">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found for this supplier.
                </p>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Return to Partners <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              Please select a supplier from our Partners page to view their
              products.
            </p>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4"
            >
              Go to Partners <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

import { CheckCircle2, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import ProductGrid from "@/components/ProductGrid";
import { type BusinessCategory, businessCategories } from "@/lib/business-data";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getAllPosts("business");

  // Helper to recursively collect all slugs
  const collectSlugs = (categories: BusinessCategory[]): string[] => {
    const slugs: string[] = [];
    for (const cat of categories) {
      slugs.push(cat.slug);
      if (cat.subCategories) {
        slugs.push(...collectSlugs(cat.subCategories));
      }
    }
    return slugs;
  };

  const categorySlugs = collectSlugs(businessCategories);

  const mdxParams = posts.map((post) => ({
    slug: post.slug,
  }));

  const dataParams = categorySlugs.map((slug) => ({ slug }));

  // Unique params
  const allParams = [...mdxParams, ...dataParams];
  const uniqueParams = Array.from(new Set(allParams.map((p) => p.slug))).map(
    (slug) => ({ slug }),
  );

  return uniqueParams;
}

// Helper to recursively find category data
function findCategoryBySlug(
  slug: string,
  categories: BusinessCategory[] = businessCategories,
): BusinessCategory | undefined {
  for (const cat of categories) {
    if (cat.slug === slug) return cat;
    if (cat.subCategories && cat.subCategories.length > 0) {
      const found = findCategoryBySlug(slug, cat.subCategories);
      if (found) return found;
    }
  }
  return undefined;
}

import { partners } from "@/lib/partners-data";

// ... imports remain the same

// Improved Helper: Get Root Category Name for a given slug
function getRootCategoryForSlug(targetSlug: string): string | undefined {
  // Check top level first
  for (const root of businessCategories) {
    if (root.slug === targetSlug) return root.title;
    // Check children
    if (root.subCategories && hasSlug(root.subCategories, targetSlug)) {
      return root.title;
    }
  }
  return undefined;
}

function hasSlug(categories: BusinessCategory[], targetSlug: string): boolean {
  for (const cat of categories) {
    if (cat.slug === targetSlug) return true;
    if (cat.subCategories && hasSlug(cat.subCategories, targetSlug)) {
      return true;
    }
  }
  return false;
}

export default async function BusinessDivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Try to find in business-data
  const categoryData = findCategoryBySlug(slug);
  const hasProducts =
    categoryData?.products && categoryData.products.length > 0;

  // 2. Fetch MDX content (we might need it for standard page OR fallback)
  let mdxData = null;
  try {
    const post = getPostBySlug(slug, "business");
    mdxData = post;
  } catch (_e) {
    // No MDX found
  }

  // 3. Logic for "Standard Page" (Has Products) OR "Category Overview" (Has Subcats/Data but no products)
  if (categoryData) {
    if (hasProducts) {
      return (
        <div className="min-h-screen bg-background">
          {/* Standard Hero */}
          <div className="relative w-full h-[50vh] overflow-hidden">
            <Image
              src={mdxData?.frontMatter.image || "/images/business-hero.png"}
              alt={categoryData.title}
              fill
              className="object-cover grayscale brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-4 bg-black/20 backdrop-blur-md">
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    Our Business
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
                  {categoryData.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-light">
                  {categoryData.description ||
                    "Leading solutions in this category."}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div>
              <h2 className="text-2xl font-bold mb-6">Products</h2>
              <ProductGrid products={categoryData.products} />
            </div>
          </div>
        </div>
      );
    } else {
      // FALLBACK VIEW (No Products)
      // 1. Identify Root Category for Partners
      const rootCategoryTitle = getRootCategoryForSlug(slug);

      // 2. Filter Partners
      const filteredPartners = partners.filter((p) => {
        if (
          rootCategoryTitle === "Neutraceuticals" &&
          p.business_category === "Nutraceuticals"
        )
          return true;
        return p.business_category === rootCategoryTitle;
      });

      // 3. Check for products for each partner (copied/adapted from PartnersPage logic)
      // We need to know if a specific partner has ANY products in the ENTIRE catalog to show "View Products"
      // Ideally we should reuse the extraction logic, but for now we can just check businessCategories directly or use a helper.
      // Since we are server-side, we can just iterate.
      const suppliersWithProducts = new Set<string>();
      const extractSuppliers = (categories: BusinessCategory[]) => {
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
          <div className="relative w-full h-[50vh] overflow-hidden">
            <Image
              src={mdxData?.frontMatter.image || "/images/business-hero.png"}
              alt={categoryData.title}
              fill
              className="object-cover grayscale brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
                  {categoryData.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-light">
                  {categoryData.description || mdxData?.frontMatter.description}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-16">
            {/* Description / MDX Content */}
            <div className="prose prose-lg dark:prose-invert max-w-4xl">
              {mdxData?.content ? (
                <MDXRemote
                  source={mdxData.content}
                  components={{
                    h1: ({ children }) => (
                      <h2 className="text-3xl font-bold mt-8 mb-4">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }) => (
                      <h3 className="text-2xl font-bold mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    li: ({ children }) => (
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>{children}</span>
                      </li>
                    ),
                  }}
                />
              ) : (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {categoryData.description ||
                    mdxData?.frontMatter.description ||
                    "More information about this section will be available soon."}
                </p>
              )}
            </div>

            {/* Partners Section */}
            {filteredPartners.length > 0 && (
              <div className="border-t pt-16">
                <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPartners.map((partner, i) => (
                    <div
                      key={i}
                      className="group bg-background border px-6 py-8 flex flex-col items-center text-center gap-6 hover:border-primary transition-colors rounded-lg"
                    >
                      <div className="relative h-20 w-40 opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0">
                        {partner.image &&
                        partner.image !== "/images/partner-placeholder.png" ? (
                          <Image
                            src={partner.image}
                            alt={`${partner.name} Logo`}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                              {partner.name}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold">{partner.name}</h3>
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
            )}
          </div>
        </div>
      );
    }
  }

  // 4. Pure MDX Pages (Not in business-data)
  if (mdxData) {
    // Extract logic from original file for pure MDX pages
    const { frontMatter, content } = mdxData;
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          <Image
            src={frontMatter.image || "/images/placeholder.jpg"}
            alt={frontMatter.title}
            fill
            className="object-cover grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-4 bg-black/20 backdrop-blur-md">
                <span className="text-xs font-bold tracking-widest uppercase text-white">
                  Our Business
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
                {frontMatter.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-light">
                {frontMatter.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-li:marker:text-primary">
              <MDXRemote
                source={content}
                components={{
                  ProductGrid,
                  h1: ({ children }) => (
                    <h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-4">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h3 className="text-2xl font-bold mt-10 mb-4 text-primary">
                      {children}
                    </h3>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 my-6 list-none pl-0">
                      {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                          return React.cloneElement(
                            child as React.ReactElement<any>,
                            { className: "flex items-start gap-2" },
                          );
                        }
                        return child;
                      })}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>{children}</span>
                    </li>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Stats Card */}
            {frontMatter.stats && (
              <div className="bg-primary/5 border border-primary/10 p-8">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Key Metrics
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {frontMatter.stats.map((stat: any, i: number) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    );
  }

  notFound();
}

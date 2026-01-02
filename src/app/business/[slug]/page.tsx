import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";
import React from "react";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts("business");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BusinessDivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { frontMatter, content } = getPostBySlug(slug, "business");

    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
          <Image
            src={frontMatter.image || "/images/placeholder.jpg"}
            alt={frontMatter.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
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

            {/* Quick Links */}
            <div className="bg-muted/50 p-8 border">
              <h3 className="font-bold text-lg mb-6">Business Divisions</h3>
              <nav className="flex flex-col gap-2">
                {[
                  { title: "Pharmaceutical", href: "/business/pharmaceutical" },
                  {
                    title: "Orthopedic Aids",
                    href: "/business/orthopedic-aids",
                  },
                  { title: "Surgicals", href: "/business/surgicals" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-3 bg-background border hover:border-primary transition-colors group"
                  >
                    <span className="font-medium">{link.title}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

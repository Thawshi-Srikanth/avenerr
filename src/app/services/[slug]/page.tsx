import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

// Custom MDX Components for a premium look
const components = {
  h1: (props: any) => (
    <h1
      className="text-4xl lg:text-5xl font-light tracking-tight mb-8"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl font-semibold tracking-tight mt-12 mb-6 text-primary"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="leading-relaxed text-muted-foreground [&:not(:first-child)]:mt-6 text-lg"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  li: (props: any) => <li {...props} />,
};

function Sidebar({ currentSlug }: { currentSlug: string }) {
  const services = [
    { name: "Information Systems", slug: "information-systems" },
    { name: "Logistic and Operations", slug: "logistic-operations" },
    { name: "Scientific Affairs", slug: "scientific-affairs" },
    { name: "Training", slug: "training" },
  ];

  return (
    <div className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-32 h-fit">
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
          More Services
        </h3>
        <nav className="flex flex-col space-y-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={cn(
                "group flex items-center justify-between py-2 text-sm transition-colors hover:text-primary",
                currentSlug === service.slug
                  ? "font-medium text-primary"
                  : "text-muted-foreground",
              )}
            >
              {service.name}
              {currentSlug === service.slug && (
                <ArrowRight className="h-4 w-4 opacity-100 transition-opacity" />
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-muted p-6">
        <h4 className="font-semibold mb-2">Need a custom solution?</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Contact our team to discuss your specific requirements.
        </p>
        <Link
          href="/contact"
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          Get in touch &rarr;
        </Link>
      </div>
    </div>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    const { content, frontMatter } = getPostBySlug(slug);

    return (
      <div className="min-h-screen bg-background">
        {/* Full Width Hero Image */}
        <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
          {frontMatter.image && (
            <Image
              src={frontMatter.image}
              alt={frontMatter.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4">
                {frontMatter.title}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                {frontMatter.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex gap-16">
          <Sidebar currentSlug={slug} />

          <div className="flex-1 min-w-0">
            {/* Stats Grid */}
            {frontMatter.stats && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-y py-12 mb-16">
                {frontMatter.stats.map((stat: any, index: number) => (
                  <div key={index}>
                    <div className="text-4xl font-bold tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
                  <MDXRemote source={content} components={components} />
                </div>
              </div>

              <div className="space-y-12">
                {/* Benefits Section */}
                {frontMatter.benefits && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {frontMatter.benefits.map(
                        (benefit: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { managementTeam } from "@/lib/team-data";

export default function TeamSection() {
  const displayedMembers = managementTeam.slice(0, 2);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 border px-3 py-1 mb-6 bg-red-50 dark:bg-red-950/20 text-primary border-red-100 dark:border-red-900/50">
                <span className="text-xs font-bold tracking-widest uppercase">
                  Leadership
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
                Management Team
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Meet the visionaries guiding Avenierr Pharma towards global
                excellence.
              </p>

              <Link
                href="/company-overview"
                className="hidden lg:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group/link"
              >
                View Full Team
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {displayedMembers.map((member, i) => (
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

            <div className="mt-12 lg:hidden">
              <Link
                href="/company-overview"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group/link"
              >
                View Full Team
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

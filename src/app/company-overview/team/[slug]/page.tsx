import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdArrowBack } from "react-icons/md";
import { managementTeam } from "@/lib/team-data";

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = managementTeam.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const bioSentences = member.bio.split(
    /(?<!\b(?:Mr|Mrs|Ms|Dr|Prof|[A-Z]))\.\s+/,
  );
  const mainQuote = bioSentences[0];
  const restOfBio = bioSentences.slice(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/business-hero.png"
          alt="Background"
          fill
          className="object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative pb-24 z-10">
        <Link
          href="/company-overview"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12 group sticky top-[80px] z-20 w-fit bg-background/80 backdrop-blur-sm py-2 px-3 rounded-md lg:static lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:z-auto"
        >
          <MdArrowBack className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Leadership
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column: Image & Contact */}
          <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-32 flex flex-col gap-6">
            <div className="relative aspect-3/4 w-full bg-card shadow-xl ring-1 ring-border p-2">
              <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="bg-card border border-border p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-2">
                Connect
              </h3>
              <div className="flex flex-col gap-4">
                {member.socials?.linkedin && (
                  <Link
                    href={member.socials.linkedin}
                    className="flex items-center justify-between group py-2"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors">
                      LinkedIn
                    </span>
                    <FaLinkedinIn className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                  </Link>
                )}
                {member.socials?.email && (
                  <Link
                    href={member.socials.email}
                    className="flex items-center justify-between group py-2 border-t border-border"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-red-600 transition-colors">
                      Email
                    </span>
                    <MdEmail className="w-5 h-5 text-muted-foreground group-hover:text-red-600 transition-colors" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Info */}
          <div className="flex-1 bg-card p-8 lg:p-16 shadow-2xl ring-1 ring-border min-h-[60vh] mt-12 lg:mt-0">
            <div className="mb-12 border-b-2 border-border pb-8">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                {member.name}
              </h1>
              <p className="text-lg text-red-600 font-medium tracking-wide">
                {member.role}
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-8 prose-p:text-muted-foreground">
              <p className="text-xl font-medium text-foreground leading-relaxed mb-8 border-l-4 border-red-600 pl-6 italic">
                {mainQuote}
                {!mainQuote.endsWith(".") ? "." : ""}
              </p>
              <div className="space-y-6">
                {restOfBio.map(
                  (sentence, index) =>
                    sentence.trim() && (
                      <p key={index}>
                        {sentence.trim()}
                        {!sentence.endsWith(".") ? "." : ""}
                      </p>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

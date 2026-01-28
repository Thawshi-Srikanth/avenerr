import { ArrowRight, Briefcase, Heart, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Work on cutting-edge solutions that are transforming the healthcare landscape in Sri Lanka and beyond.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Join a diverse team of professionals where every voice is heard and teamwork is the key to our success.",
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      description:
        "We invest in our people with continuous learning opportunities, mentorship, and clear career pathways.",
    },
    {
      icon: Heart,
      title: "Meaningful Impact",
      description:
        "Be part of a mission that directly improves patient outcomes and accessibility to quality healthcare.",
    },
  ];

  const openings = [
    {
      role: "Medical Representative",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      department: "Sales & Marketing",
    },
    {
      role: "Regulatory Affairs Officer",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      department: "Regulatory",
    },
    {
      role: "Logistics Coordinator",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      department: "Operations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/business-hero.png" // Reusing hero for consistency
          alt="Careers at Avenierr"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-4 bg-black/20 backdrop-blur-md">
              <span className="text-xs font-bold tracking-widest uppercase text-white">
                Careers
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
              Join Our Mission.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-light">
              Build your career with a company that values innovation,
              integrity, and impact.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 px-6 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              Why work at Avenierr?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Avenierr Pharma, we believe that our greatest asset is our
              people. We are committed to fostering an environment where talent
              thrives, ideas are celebrated, and hard work is rewarded.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you are an experienced professional or just starting your
              career, we offer a platform to grow, learn, and make a real
              difference in the pharmaceutical industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 border bg-card hover:border-primary/50 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-6 lg:py-24 bg-muted/30 border-t">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore exciting opportunities to join our team. If you don't see
              a role that fits, feel free to send us your CV for future
              consideration.
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-background border hover:border-primary transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <ArrowRight className="w-3.5 h-3.5 rotate-45" />{" "}
                      {job.location}
                    </span>
                  </div>
                </div>
                <Button className="mt-4 sm:mt-0 shrink-0" variant="outline">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 border border-dashed rounded-lg bg-background">
            <h3 className="text-lg font-bold mb-2">
              Don't see the right role?
            </h3>
            <p className="text-muted-foreground mb-6">
              We are always on the lookout for exceptional talent. Send your CV
              to our HR team.
            </p>
            <Link href="mailto:careers@avenierr.com">
              <Button>Email Your CV</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

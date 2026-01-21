import Image from "next/image";
import Section from "@/components/Section";
import {
  CheckCircle2,
  Globe,
  Heart,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/images/about-hero.png"
          alt="About Avenierr Pharma"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4">
              About Us
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Delivering quality healthcare worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-24">
        {/* Company Overview */}
        <Section>
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Company Overview
            </h2>
            <div className="flex items-center gap-4 text-primary">
              <span className="text-6xl font-bold">14+</span>
              <span className="text-lg font-medium leading-tight">
                Years in
                <br />
                Work
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Avenierr Pharma (Pvt) Ltd is a leading company based in Sri Lanka,
              established in 2007 with a vision to deliver quality healthcare
              worldwide. Despite its entry to the pharmaceutical industry as a
              novice, Avenierr has been successful in building trusted global
              partnerships with top-tier pharmaceutical companies located in
              France, Italy and India. We excel in importing, branding,
              marketing, and distributing a range of pharmaceutical products
              such as medicines, orthopaedic appliances, and surgical
              instruments.
            </p>
            <p>
              Under the visionary leadership of Managing Director, Mr. C.
              Sathananthan and the untiring commitment of the staff members, we
              aim on expanding accessibility to quality drugs at an affordable
              price as a measure to create a positive impact in the Sri Lankan
              pharmaceutical industry. We are of the view that this is a pivotal
              element which ensures the existence of our company as a credible
              institution and acts as the driving factor of our company’s growth
              amidst the rising market competition.
            </p>
            <p>
              The entry into the pharmaceutical industry was a bold and wise
              decision taken by our Director. This initial step was inspired by
              the sentiment of providing relief to those individuals that suffer
              from various illnesses and also by having foreseen the market
              opportunities created in the sector of incorporation. Avenierr
              Pharma (Pvt) Ltd focuses on delivering quality healthcare related
              products to the Sri Lankan market through its very own offices and
              dealers networking island wide.
            </p>
            <p>
              The company is well abided by the general statutory requirements
              of the regulatory bodies in the country and the Ministry of Health
              in particular, enabling us to introduce our company as an ethical
              and principal driven organisation.
            </p>
            <p>
              Having commenced operations with a limited staff and minimum
              overheads, the company has significantly widened the business
              operations in terms of products, turnover volume, and
              profitability, enabling the company to increase the staff, handle
              numerous product lines, expand dealer networks, and better serve
              the customers.
            </p>
          </div>
        </Section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/50 p-8 border">
            <Globe className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the most sought-after pharmaceutical products supplier
              in the Sri Lankan market by being the institution which provides
              the largest range of quality products.
            </p>
          </div>
          <div className="bg-muted/50 p-8 border">
            <Star className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the market leader of the pharmaceutical industry segment
              by providing quality drugs and ensuring superior performance
              levels beyond the expectations of the customers and be distinctive
              among other market players in terms of unmatched service
              excellence and ethical behavior.
            </p>
          </div>
        </div>

        {/* Values and Beliefs */}
        <Section>
          <div className="col-span-12 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Values and Beliefs
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The core principles that guide our every action.
            </p>
          </div>

          <div className="col-span-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Collaboration"
              description="We value the contribution of our employees, customers, regulators, medical professionals and industry, resulting in the success of the company."
            />
            <ValueCard
              icon={<ShieldCheck className="h-6 w-6 text-primary" />}
              title="Integrity & Trust"
              description="We value high standards of integrity, trust, and equitability."
            />
            <ValueCard
              icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
              title="Quality Standards"
              description="We always strive to deliver highest quality products to our customers in conformity with the benchmark standards of the industry."
            />
            <ValueCard
              icon={<Star className="h-6 w-6 text-primary" />}
              title="Uniqueness"
              description="We always aspire to be different and to create a unique identity ahead of the other companies in the market segment in terms of product, quality, commitment, reliability and pricing."
            />
            <ValueCard
              icon={<Heart className="h-6 w-6 text-primary" />}
              title="Wellbeing"
              description="We care for the wellbeing and speedy recovery of the individuals that are suffering from various different illnesses by providing quality drugs."
            />
          </div>
        </Section>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 p-4 hover:bg-muted/50 transition-colors">
      <div className="shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

import { CheckCircle2, Heart, ShieldCheck, Star, Users } from "lucide-react";

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
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary">
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
          </div>
          <div className="lg:w-3/4 text-lg text-muted-foreground space-y-6 leading-relaxed">
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
        </section>

        {/* Values and Beliefs */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative border-t pt-24">
          <div className="lg:w-1/4 shrink-0">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">
                Values and Beliefs
              </h2>
              <p className="text-muted-foreground text-lg">
                The core principles that guide our every action.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid sm:grid-cols-2 gap-8">
              <ValueCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Collaboration"
                description="We believe in the power of collaboration and value the contributions of our employees, principals, customers, regulators, healthcare professionals, and industry partners. Through mutual respect and shared objectives, we foster strong relationships that drive sustainable growth and collective success."
              />
              <ValueCard
                icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                title="Integrity & Trust"
                description="Integrity and trust are fundamental to how we operate. We uphold transparency, fairness, and ethical conduct in all our interactions, ensuring accountability and credibility with regulators, partners, customers, and the communities we serve."
              />
              <ValueCard
                icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
                title="Quality Standards"
                description="Quality is embedded in every stage of our operations. We are committed to delivering products that meet the highest industry benchmarks and regulatory standards, ensuring safety, efficacy, and reliability in full compliance with applicable NMRA and Ministry of Health requirements."
              />
              <ValueCard
                icon={<Star className="h-6 w-6 text-primary" />}
                title="Uniqueness"
                description="We strive to differentiate ourselves by building a distinctive identity in the pharmaceutical market. Through innovative product offerings, consistent quality, reliable service, competitive pricing, and unwavering commitment, we aim to stay ahead while adding meaningful value to the healthcare sector."
              />
              <ValueCard
                icon={<Heart className="h-6 w-6 text-primary" />}
                title="Wellbeing"
                description="We are driven by a genuine concern for patient wellbeing. By ensuring access to quality-assured pharmaceuticals and healthcare products, we contribute to improved health outcomes and support the timely recovery of individuals affected by illness."
              />
            </div>
          </div>
        </section>
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

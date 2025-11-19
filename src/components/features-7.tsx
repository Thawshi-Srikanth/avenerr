import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="overflow-hidden py-16 md:py-32 bg-[url(/images/home-3.png)] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-7xl space-y-8 border-t px-6 md:space-y-12">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-red-500 px-6 ">
          Why us
        </span>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Advancing Healthcare
          </h2>
          <p className="mt-6 text-lg">
            Empowering Sri Lanka’s healthcare sector with systems that scale —
            supporting global partnerships, nationwide distribution, and
            reliable access to essential medicines.
          </p>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Information Systems</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Our information systems strengthen operational accuracy,
              streamline workflows, and support data-driven decision-making
              across the entire pharmaceutical supply chain.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Logistic & Operations</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              From global sourcing to island-wide delivery, our logistics and
              operations ensure that high-quality medicines, orthopaedic
              products, and surgical instruments reach healthcare providers on
              time.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Scientific Affairs</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Scientific Affairs safeguards product quality by ensuring
              regulatory compliance, maintaining scientific accuracy, and
              upholding international standards for every imported
              pharmaceutical product.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Training</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We invest in continuous learning—equipping teams, partners, and
              healthcare professionals with the knowledge needed to maintain
              quality, safety, and service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

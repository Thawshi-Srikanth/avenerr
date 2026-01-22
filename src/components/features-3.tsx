import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4">
            Excelling in importing, branding, marketing, and distributing a
            range of pharmaceutical products to deliver quality healthcare
            island-wide.
          </p>
        </div>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16 rounded-none">
          <div className="group shadow-zinc-950/5 flex flex-col h-full">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="/images/icon/pill.png"
                  alt="Avenierr Pharma Logo"
                  width={24}
                  height={24}
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Pharmaceutical</h3>
            </CardHeader>

            <CardContent className="flex flex-col grow justify-between">
              <p className="text-sm mb-6">
                We specialize in importing and distributing a wide range of
                pharmaceutical products to ensure quality healthcare solutions.
              </p>
              <Link
                href="/business/pharmaceutical"
                className="inline-flex max-w-fit mx-auto items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                More Info
              </Link>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5 flex flex-col h-full">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="/images/icon/surgery.png"
                  alt="Avenierr Pharma Logo"
                  width={24}
                  height={24}
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Surgical Instruments</h3>
            </CardHeader>

            <CardContent className="flex flex-col grow justify-between">
              <p className="mt-3 text-sm mb-6">
                We provide a comprehensive range of high-quality surgical
                instruments, ensuring precision and reliability for medical
                professionals.
              </p>
              <Link
                href="/business?query=Surgicals"
                className="inline-flex max-w-fit mx-auto items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                More Info
              </Link>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5 flex flex-col h-full">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Image
                  src="/images/icon/orthopedics.png"
                  alt="Avenierr Pharma Logo"
                  width={24}
                  height={24}
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Orthopedic Aids</h3>
            </CardHeader>

            <CardContent className="flex flex-col grow justify-between">
              <p className="mt-3 text-sm mb-6">
                Our orthopedic aids are designed to provide support and enhance
                mobility, catering to the diverse needs of patients.
              </p>
              <Link
                href="/business?query=Orthopedic Aids"
                className="inline-flex max-w-fit mx-auto items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                More Info
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

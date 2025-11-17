import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-primary">
          Unites global innovation with local healthcare needs.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59  from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/images/home-2.png"
                className="hidden  dark:block"
                alt="payments illustration dark"
                width={1000}
                height={1000}
              />
              <Image
                src="/images/home-2.png"
                className=" shadow dark:hidden"
                alt="payments illustration light"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-secondary">
              Avenir Pharma has grown to become more than just a pharmaceutical
              company.{" "}
              <span className="text-accent font-bold">
                It is built on a strong global ecosystem
              </span>{" "}
              — connecting trusted partners and quality healthcare.
            </p>

            <p className="text-secondary">
              Since 2007, Avenir Pharma has expanded through strategic
              collaborations with leading manufacturers in France, Italy, and
              India — enabling the import, branding, marketing, and distribution
              of high-quality medicines, orthopedic appliances, and surgical
              instruments.
            </p>
            <div className="pt-6 text-secondary">
              <blockquote className="border-l-4 border-primary pl-4">
                <p>
                  Partnering with Avenir Pharma has elevated our ability to
                  deliver reliable healthcare solutions. Their commitment to
                  quality and global collaboration ensures that every product
                  meets the highest standards of patient care.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Dr. Ravin Perera, Medical Director
                  </cite>
                  <img
                    className="h-5 w-fit dark:invert"
                    src="/logos/avenir-logo.svg"
                    alt="Avenir Pharma Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
